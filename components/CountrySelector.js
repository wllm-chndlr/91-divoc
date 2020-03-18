import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';
import styled from 'styled-components';

const SelectContainer = styled.div`
    padding: 2rem 0;
    select {
        height: 2rem;
    }

    h2 {
        margin: 0 2rem 0 0;
    }
`;

const CountryStatsContainer = styled.div`
    align-items: center;
    display: flex;
`;

export default function CountrySelector() {
    const { stats: countries, loading, error } = useStats('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setSelectedCountry] = useState('USA');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    return (
        <div>
            <SelectContainer>
                <CountryStatsContainer>
                    <h2>{selectedCountry} Totals</h2>
                    <select
                        onChange={e => {
                            setSelectedCountry(e.target.value);
                        }}
                        >
                        {Object.entries(countries.countries).map(([country, code]) => (
                            <option
                            selected={selectedCountry === countries.iso3[code]}
                            key={code}
                            value={countries.iso3[code]}
                            >
                                {country}
                            </option>
                        ))}
                    </select>
                </CountryStatsContainer>
            </SelectContainer>

            <Stats
                url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
            >
            </Stats>
        </div>
    );
}
