import { renderHook } from '@testing-library/react-hooks';
import { useBadgeList } from '../../hooks/UseBadgeList';

it('should load', () => {
    const { result } = renderHook(() => useBadgeList());

    expect(result.current).toBeDefined();
    expect(result.current.length).toBe(19);
});