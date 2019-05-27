import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User 
                src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630" 
                alt="prince"
                name="Harry"
            />
            <div className="users__block">
                <User 
                    src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630" 
                    alt="prince"
                    name="Harry"
                    min
                />
            </div>
        </div>
    );
};