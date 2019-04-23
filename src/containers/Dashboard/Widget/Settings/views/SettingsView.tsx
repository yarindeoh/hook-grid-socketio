import * as React from 'react';
import { FunctionComponent, useState } from 'react';

interface ISettingsView {
    settingsChanged: any;
}

const Settings: FunctionComponent<ISettingsView> = props => {
    const [date, setDate] = useState('2018-07-22');
    return (
        <div className="tooltip">
            <input
                type="date"
                id="start"
                name="trip-start"
                value={date}
                onChange={e => {
                    setDate(e.currentTarget.value);
                }}
            />
            <button onClick={props.settingsChanged.bind(this, date)}>
                Save
            </button>
        </div>
    );
};

export default Settings;
