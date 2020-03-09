import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { Dropdown, IDropdownOption, IDropdownStyles, Stack, IStackTokens, DatePicker, TextField, IDatePickerStyles, ITextFieldStyles, PrimaryButton, IButtonStyles, Label, IStackStyles } from 'office-ui-fabric-react';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import { IBasePickerSuggestionsProps, NormalPeoplePicker, ValidationState, IBasePickerStyles } from 'office-ui-fabric-react/lib/Pickers';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { people, mru } from '@uifabric/example-data';
import { loadAllBadges, addBadge } from '../../store/Badges';
import Badge from '../../models/Badge';
import { ReduxState } from '../../store/Store';
import useActivityList from '../../hooks/UseActivityList';
import useBadgeList from '../../hooks/UseBadgeList';

ActivitySubmit.propTypes = {
    badges: PropTypes.object,
    addBadge: PropTypes.func
}

function ActivitySubmit(props: any): JSX.Element {
    const {badges, addBadge} = props;
    const stackTokens: IStackTokens = { childrenGap: 20 };
    const stackStyles: Partial<IStackStyles> = {
        root: { width: 500 }
    }
    const dropDownStyles: Partial<IDropdownStyles> = {
        dropdown: { width: 300 }
    };
    const datePickerStyles: Partial<IDatePickerStyles> = {
        textField: { width: 300 }
    };
    const textFieldStyles: Partial<ITextFieldStyles> = {
        wrapper: { width: 300 }
    };
    const buttonStyles: Partial<IButtonStyles> = {
        root: { width: 300 }
    };
    const basePickerStyles: Partial<IBasePickerStyles> = {
        root: { width: 300 }
    };

    let date: Date = new Date();

    const suggestionProps: IBasePickerSuggestionsProps = {
        suggestionsHeaderText: 'Suggested People',
        mostRecentlyUsedHeaderText: 'Suggested Contacts',
        noResultsFoundText: 'No results found',
        loadingText: 'Loading',
        showRemoveButtons: true,
        suggestionsAvailableAlertText: 'People Picker Suggestions available',
        suggestionsContainerAriaLabel: 'Suggested contacts'
    };

    const [mostRecentlyUsed, setMostRecentlyUsed] = React.useState<IPersonaProps[]>(mru);
    const [peopleList, setPeopleList] = React.useState<IPersonaProps[]>(people);

    const picker = React.useRef(null);

    const onFilterChanged = (
        filterText: string,
        currentPersonas?: IPersonaProps[]
      ): IPersonaProps[] | Promise<IPersonaProps[]> => {
        if (filterText) {
          let filteredPersonas: IPersonaProps[] = filterPersonasByText(filterText);
    
          filteredPersonas = removeDuplicates(filteredPersonas, currentPersonas);
          return filterPromise(filteredPersonas);
        } else {
          return [];
        }
    };

    const filterPersonasByText = (filterText: string): IPersonaProps[] => {
        return peopleList.filter(item => doesTextStartWith(item.text as string, filterText));
    };

    const filterPromise = (personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
        return personasToReturn;
    };

    const returnMostRecentlyUsed = (currentPersonas?: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
        setMostRecentlyUsed(removeDuplicates(mostRecentlyUsed, currentPersonas));
        return filterPromise(mostRecentlyUsed);
    };

    const onRemoveSuggestion = (item: IPersonaProps): void => {
        const indexPeopleList: number = peopleList.indexOf(item);
        const indexMostRecentlyUsed: number = mostRecentlyUsed.indexOf(item);
    
        if (indexPeopleList >= 0) {
          const newPeople: IPersonaProps[] = peopleList.slice(0, indexPeopleList).concat(peopleList.slice(indexPeopleList + 1));
          setPeopleList(newPeople);
        }
    
        if (indexMostRecentlyUsed >= 0) {
          const newSuggestedPeople: IPersonaProps[] = mostRecentlyUsed
            .slice(0, indexMostRecentlyUsed)
            .concat(mostRecentlyUsed.slice(indexMostRecentlyUsed + 1));
          setMostRecentlyUsed(newSuggestedPeople);
        }
    };

    const activityList = useActivityList();
    
    const activityOptions: IDropdownOption[] = activityList.map((activity) => {
        return { key: activity.id, text: activity.name, data: activity }
    });

    const [selectedActivity, setSelectedActivity] = React.useState<IDropdownOption>();

    const handleActivityOptionsChanged = (option?: IDropdownOption) => {
        setSelectedActivity(option);
    }

    const handleSubmit = () => {
        if(selectedActivity?.data !== null) {
            const badge: Badge | undefined = findBadge(selectedActivity?.data.badgeId);
            if(badge !== undefined) {
                const newBadgeId: number = badges.earnedCorpBadges.length + badges.earnedCommBadges.length + 1;
                badge.id = newBadgeId;
                addBadge(badge);
            }
        }
    }

    const badgeList: Array<Badge> = useBadgeList();

    const findBadge = (badgeId: number): Badge | undefined => {
        const badge = badgeList.find(b => b.id === badgeId);
        return badge;
    }
      
    initializeIcons();

    return (
        <Stack tokens={stackTokens} styles={stackStyles}>
            <h1>Submit a Completed Activity</h1>
            <Dropdown
                label="Activity Type"
                placeholder="Select an option"
                options={activityOptions}
                onChange={(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number) => { handleActivityOptionsChanged(option); }}
                styles={dropDownStyles} />
            <DatePicker 
                label="Date"
                value={date}
                allowTextInput={true}
                styles={datePickerStyles} />
            <TextField
                label="Activity Description"
                multiline
                rows={3}
                styles={textFieldStyles} />
            <Label>User(s)</Label>
            <NormalPeoplePicker
                onResolveSuggestions={onFilterChanged}
                onEmptyResolveSuggestions={returnMostRecentlyUsed}
                getTextFromItem={getTextFromItem}
                pickerSuggestionsProps={suggestionProps}
                className={'ms-PeoplePicker'}
                key={'normal'}
                onRemoveSuggestion={onRemoveSuggestion}
                onValidateInput={validateInput}
                removeButtonAriaLabel={'Remove'}
                inputProps={{
                  onBlur: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onBlur called'),
                  onFocus: (ev: React.FocusEvent<HTMLInputElement>) => console.log('onFocus called'),
                  'aria-label': 'People Picker'
                }}
                componentRef={picker}
                onInputChange={onInputChange}
                resolveDelay={300}
                disabled={false}
                styles={basePickerStyles} />
            <PrimaryButton
                text="Submit"
                onClick={() => { handleSubmit(); }}
                styles={buttonStyles} />
        </Stack>
    )
}

function doesTextStartWith(text: string, filterText: string): boolean {
    return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
}

function removeDuplicates(personas: IPersonaProps[], possibleDupes?: IPersonaProps[]) {
    return personas.filter(persona => !listContainsPersona(persona, possibleDupes));
}

function listContainsPersona(persona: IPersonaProps, personas?: IPersonaProps[]) {
    if (!personas || !personas.length || personas.length === 0) {
      return false;
    }
    return personas.filter(item => item.text === persona.text).length > 0;
}

function getTextFromItem(persona: IPersonaProps): string {
    return persona.text as string;
}

function validateInput(input: string): ValidationState {
    if (input.indexOf('@') !== -1) {
      return ValidationState.valid;
    } else if (input.length > 1) {
      return ValidationState.warning;
    } else {
      return ValidationState.invalid;
    }
}

function onInputChange(input: string): string {
    const outlookRegEx = /<.*>/g;
    const emailAddress = outlookRegEx.exec(input);
  
    if (emailAddress && emailAddress[0]) {
      return emailAddress[0].substring(1, emailAddress[0].length - 1);
    }
  
    return input;
}

const mapStateToProps = (state: ReduxState) => ({
    badges: state.badges
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => 
    bindActionCreators(
        {
            loadAllBadges, addBadge
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ActivitySubmit);