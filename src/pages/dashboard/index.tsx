import useContributors from "../../hooks/api/useContributors"
import { Contributor } from "../../modules/contributors/contributors.types";

const DashboardMain = () => {
    const { data } = useContributors();
    return (
        <div>
            {data ? data.map((contributor:Contributor) =>(
                <div>
                    <img height="48px" width="48px" alt={contributor.login} src={contributor.avatar_url}/>
                    {contributor.login}
                </div>
            )): <>Loading...</>}
        </div>
    )
}

export default DashboardMain
