import React from 'react';

export const LocaleContext = React.createContext();

class LocaleProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            local: 'en',
            changelocale: this.changelocale
        }
        this.changeLocale = () => {
            this.setState(state => {
                const newLocal = state.locale === 'en' ? 'fr' : 'en';
                return {
                    locale: newLocale
                };
            })
        }
    }
    render() {
        return (
            <LocaleContext.Provider value={this.state}>
                {this.props.children}
            </LocaleContext.Provider>
        )
    }

}
export default LocaleProvider;