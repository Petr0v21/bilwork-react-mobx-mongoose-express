import React from 'react';
import { observer } from "mobx-react";

const AdModal = () => {
    return(
        <form style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '12px',
            margin: 'auto',
            maxWidth: '300px',
            gap: '8px'
        }}>
            Ad
            <input />
            <input />
            <input />
            <button type="submit">send</button>
        </form>
    );

};
export default observer(AdModal);