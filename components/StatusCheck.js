import { useState, useEffect } from 'react';
const localURL = process.env.URL;
const StatusCheck = () => {
  const [isPingSuccessful, setIsPingSuccessful] = useState(null);

  useEffect(() => {
    const pingURL = async () => {
      try {
        const response = await fetch(localURL); // Replace with your desired URL
        if (response.ok) {
          setIsPingSuccessful(true);
        } else {
          setIsPingSuccessful(false);
        }
      } catch (error) {
        setIsPingSuccessful(false);
      }
    };

    pingURL();
  }, []);

  return (
    <div>
      {isPingSuccessful === true && <div style={{ color: 'green' }}>Green dot</div>}
      {isPingSuccessful === false && <div style={{ color: 'red' }}>Red dot</div>}
    </div>
  );
};

export default StatusCheck;
