import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const usePasswordToggie = () => {

    const [visible, setVisiblity] = useState(false);

    const Icon = <FontAwesomeIcon icon={visible ? "eye-slash" : "eye"} />;

    const inputType = visible ? "text" : "password";

    return [inputType, Icon];
}

export default usePasswordToggie;