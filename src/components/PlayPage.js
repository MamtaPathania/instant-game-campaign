import React from 'react';

function PlayPage() {
  return (
    <div className='flex justify-center items-center lg:h-screen '>
      <div className='border-4 border-black lg:m-4 m-9 sm:m-8 w-full sm:w-3/4 md:w-1/2 lg:w-[700px] p-4 sm:p-6 mx-4 sm:mx-8 text-center'>
        <h1 className='text-3xl font-bold mb-4'>
          How To Play
        </h1>
        <p className='font-bold text-md sm:text-base'>
          1. How to Subscribe to EMT NETWORK and MTN Promotion:<br />
          2. Ensure you are eligible to participate (See Eligibility Criteria below).<br />
          3. For airtime prizes, wait for an SMS notification in case you win.<br />
          4. To participate in the Instant Game:<br />
          a. Send the predefined keyword (e.g., 1G1, 1G2, 1G3, IG7) to short code "20781" to subscribe.<br />
          b. You'll receive a message asking you to send "WIN" or "Play" to reveal your matching number.<br />
          c. Respond to the message with win or play.<br />
          d. A reply message will contain three random cash or airtime denominations.<br />
          e. If all three denominations match, you win instantly.<br />
          5. Subscription is open until 23:59 of the same day.<br />
          6. Unsubscribe, send the defined keyword (Stop IG1, Stop IG2, Stop IG3, IG7) to 20781, depending on the subscription keyword and price point used.
        </p>
      </div>
    </div>
  );
}

export default PlayPage;
