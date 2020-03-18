import useStats from '../utils/useStats';
import styled from 'styled-components';

const StatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
`;

const StatBlock = styled.div`
    align-items: center;
    background: #f8615a;
    border: 2px solid #fff;
    border-radius: 1rem;
    display: grid;
    font-size: 1rem;
    margin-bottom: 0;
    padding: 2rem;

    -webkit-box-shadow: 0 8px 6px -6px black;
    -moz-box-shadow: 0 8px 6px -6px black;
    box-shadow: 0 8px 6px -6px black;

    h3 {
        margin-bottom: 0.5rem;
        margin-top: 0;
    }

    span {
        color: #fff;
        font-weight: 700;
    }
`;

export default function Stats({ url }) {
    const { stats, loading, error } = useStats(url);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <StatGrid>
            <StatBlock>
                <h3>Confirmed</h3>
                <span>
                    {stats.confirmed.value}
                </span>
            </StatBlock>
            <StatBlock>
                <h3>Deaths</h3>
                <span>
                    {stats.deaths.value}
                </span>
            </StatBlock>
            <StatBlock>
                <h3>Recovered</h3>
                <span>
                    {stats.recovered.value}!
                </span>
            </StatBlock>
            <StatBlock>
                <h3>Last Update</h3>
                <span>
                    {stats.lastUpdate}
                </span>
            </StatBlock>
        </StatGrid>
    )
}
