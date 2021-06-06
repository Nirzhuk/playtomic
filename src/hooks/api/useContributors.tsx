import useSWR from "swr";
import fetcher from "../../core/utils/api/fetcher";



const useContributors = () => {
    const fetchParams = useSWR(
        "https://api.github.com/repos/vercel/swr/contributors",
        fetcher
    )
    return fetchParams;
};

export default useContributors;