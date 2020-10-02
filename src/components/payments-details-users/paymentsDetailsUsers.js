import React from 'react';


const PaymentsDetailsUsers = ({users}) => {

    return users.map((item) => (
        <div className='w-100' key={item.id}>
            <input
                type="checkbox"
                name="sameadr"
            />
            {item.name}
            <input
                className='amount_spent'
                type='text'
                placeholder='0'
                key={item.id}
            />
        </div>
    ));
};

export default PaymentsDetailsUsers;


