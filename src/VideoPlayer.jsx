import React, {useEffect, useRef} from 'react'
import CryptoJS from 'crypto-js';


const MyComponent = () => {

    const aws_access_key_id = process.env.REACT_APP_AWS_ACCESS_KEY_ID
    const fernet_key = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_FERNET_KEY);

    console.log("fernet_key", fernet_key)
    console.log("aws_access_key_id", aws_access_key_id)

    let state = {
        encryptedUrl: "https://instincthub.nyc3.digitaloceanspaces.com/instincthub/encrypted_video.mp4",
        key: process.env.REACT_APP_FERNET_KEY
    }
    const decryptUrl = () => {
        const key = CryptoJS.enc.Base64.parse(state.key);
        const fernet = new CryptoJS.algo.Fernet.init(key);
        const decryptedUrl = fernet.decrypt(this.state.encryptedUrl);
        return decryptedUrl.toString(CryptoJS.enc.Utf8);
    }

    return (<h1>
    </h1>);
}

export default MyComponent;