declare const useLoadingState: () => {
    loading: boolean;
    wrapper: <T>(fn: (...params: any[]) => Promise<T>, ...params: any[]) => Promise<T>;
};
export default useLoadingState;
