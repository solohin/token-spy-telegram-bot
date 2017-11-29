"use strict";
//libs
//modules
const admin = require('firebase-admin');
//init
admin.initializeApp({
    "databaseURL": "https://ethertokensspy.firebaseio.com",
    credential: admin.credential.cert({
            "type": "service_account",
            "project_id": "ethertokensspy",
            "private_key_id": "2d8eed2fb68d6bd8687ae6f7cd07d4fa84d5c0a9",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDBclHW/nxe2rNU\ncX+u4zxHCk2foP+UWzt8S3ikU4UfnsZaq0YSM9sC46FIIaeyCmB8PZ81bLUdtUDB\nbqevOqapXTNIT3XJ4oQFCwgcYCRWfRg1Dt/Sjpp9+i9VIjLdiy5f3HAHygwauXwp\nuXrTSZYGfeBfYfXJDt6w0rQk99vUilKRwU5hxGJdDMELmiP5rtiirZwz+2QCkmnv\n/h1Wgxgeh04i/k9Ge+5HoRDRDaBFtgTlTbvqjnUYpc/UZuXqAGdhktEfkkBpvX5A\nI0s2Vn/yXWrzP/bDVqpvtT8Uilj4b7kafaBXPdCUi1Kgi0Wqfw80gPK5crBLhIEy\n+r/x3vLXAgMBAAECggEATXpklefyVylf5uPYgGrJwyg4w8T/aGOL9THjHWnIKUx1\n5G2x0GuNfeA+wf2cxT3LvCcQI50pAz+Lso2HwrKKes310rHkmtnLB5wOARNuqmdK\n8UFGWvY7oVY5a+8ZEUuD5OgMxMnjRDbjKHD95S8VU/9JhNpez0rR3V9ewGm3Va3o\nrzJ5hXqW4/u2V/52DS9e57OAlWWhzZ4hrdbpgouJKtqBkawxPlcQRhYtRXcFHMHs\nXnENElrSYbjHDQEDQqulNZpB1PNaEvSVmbTDS3ZjAIhUCXRCfu9Tj+OSwUD/352Q\nUWV4eIYltxV1s76NYXUMpCoQLMLT8mveBVvsjcwWjQKBgQDijmgtX2q3KGl7kHsM\nWfM1FfNUv22SyhOJ06Kd2TS2kmAkNUaiQnv8SHXF0j3BuiTZkXhws90u6xVVX6Nt\nsJdZJoEs9KHuDlaTDvF2vEBJFdh6iJvdX9lAAb/WggGf3rItZ2jZpVJQeS1OuPWv\n//V+pnbyElYqxYGBHkQw/lLc7QKBgQDallfH6WL0cJGOkATe/fnzExDGcITfMvdh\nPW3ByRYIB/091SR0wCfFMzYWAZp2IyRav2EuGN+4Xq25iQ3NzzOoz/jjkw3w7pPD\nHpAgUsQayxFstctUswChvcA/qlao9BR+aVsbG1La11L8nMCeReXA2+tOht5AfWCX\nDx7O8+5aUwKBgQC+OHd78St20XWPjAXknvm3TtDaDUiBAS5agNl+00qRKGGUxS6j\nOlNDxcss55N2v0YFb0DC0CIcLMHixsQ/axAIiG3ZQyVa7ar/GoLfALyxIKh8aYsE\n2l9cgJuEDfAzPRY5TSQZ6dctPjEucdnHho+nYTlpkr/Kdb6AnNsAj+kfGQKBgQCE\np+scAtKwIETl7RdXsXDoiPCMTasFveuN0vbyPTQmqZqR1PGr/RXlwr+XOV/hRFCC\n1lSG4kebn7H0wG1lMtNaJuUYT52NU2zPZJP5WeFzlTu86tM8UuoWPo8W1CyFmqN5\nWD0XRUzSTQ0rC4KGS0s08QJsBMOLBcwBwQZkeHt1ywKBgCJIBgincZuopeWnnFiV\nZQVWRsjIvRwxsQi0auvaLb1p28tH5k8VOmgB6EDD+fjyLfgSg2CCmki9l+2NUO1w\n1vqkfqQ7N5q19o6Z8juIYBEhJ5tcZ1AvIY4E94Pt3eAUThl9UJds56jw2wVAAqBo\nAecZG2ov5v2dXqEGpO9WNDlO\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-quhin@ethertokensspy.iam.gserviceaccount.com",
            "client_id": "100640903389157059681",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://accounts.google.com/o/oauth2/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-quhin%40ethertokensspy.iam.gserviceaccount.com"
        }
    ),
});
require('./components/onParseNewTransfers')().then(console.log).catch(console.log)
// require('./components/getNewTransfers')('0x83778d18a106327efd25ceeffbf3fa290ce68688', 1511430819).then(console.log);
