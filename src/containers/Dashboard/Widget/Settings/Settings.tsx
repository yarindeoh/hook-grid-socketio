import * as React from 'react';
import { FunctionComponent, useState, useCallback } from 'react';
import SettingsView from './views/SettingsView';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

interface ISettings {
    widgetId: string;
    widgetTitle?: string;
}

const Settings: FunctionComponent<ISettings> = props => {
    const [showSettings, setShowSettings] = useState(false);
    const toggleSettings = useCallback(() => {
        setShowSettings(!showSettings);
    }, [showSettings]);
    const dispatch = useDispatch();
    const settingsChanged = useCallback(data => {
        dispatch({ type: `settings/${props.widgetId}/SETTINGS_CHANGED` });
    }, []);

    return (
        <div className="header">
            <FontAwesomeIcon icon={faEllipsisV} size="lg" />
            <span>{props.widgetTitle}</span>
            <div className="settings" onClick={toggleSettings}>
                <FontAwesomeIcon icon={faCog} size="lg" />
            </div>
            {showSettings && <SettingsView settingsChanged={settingsChanged} />}
        </div>
    );
};

export default React.memo(Settings);
