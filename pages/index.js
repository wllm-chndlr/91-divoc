import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 1rem;
        color: #434e52;
        background: #ffd868;
    }
`;

export default function IndexPage() {
    return (
        <div>
            <h1 style={{color: '#434e52', fontSize: '3rem'}}>COVID-19 Live Data</h1>
            <h2>Global Totals</h2>

            <GlobalStyle />
            <Stats url='https://covid19.mathdro.id/api'></Stats>
            <CountrySelector></CountrySelector>
        </div>
    )
}
