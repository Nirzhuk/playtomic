import useContributors from "../../hooks/api/useContributors"

const DashboardMain = () => {
    const { data } = useContributors();
    return (
        <div>
            {data ? data.map((contributor:any) =>(
                <div>
                    <img height="48px" width="48px" alt={contributor.login} src={contributor.avatar_url}/>
                    {contributor.login}
                </div>
            )): <>Loading...</>}
        </div>
    )
}

export default DashboardMain
