import React from 'react';

const isiDadu = () => {
    const [Acak, setAcak] = React.useState({ nilai: null, nilai2: null })//ACAK DADU
    const acak = Math.floor(Math.random() * 6) + 1;
    const acak1 = Math.floor(Math.random() * 6) + 1;
    setAcak({ nilai: acak, nilai2: acak1 })
    return ({ Acak })
}
export default isiDadu
