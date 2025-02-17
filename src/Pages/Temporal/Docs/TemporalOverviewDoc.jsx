import React from 'react';

export const TemporalOverviewDoc = () => {
    return <section>
            <header>
                <h3>Introduction to Temporal</h3>
                <p>
                    Temporal is a modern library designed to handle date and time operations more
                    accurately and efficiently than the native <code>Date</code> object.
                </p>
                <a href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal"}>Documentation</a>
            </header>

            <ul>
                <li>
                    <strong>Purpose:</strong> Temporal is intended to become a top-level namespace, similar to the <code>Math</code> library in JavaScript.
                </li>
                <li>
                    <strong>Utility:</strong> Over 200 utility functions are available for performing complex date computations.
                </li>
                <li>
                    <strong>Goal:</strong> Temporal aims to replace the <code>Date</code> object, simplifying date management and eliminating the need for third-party libraries. Date API always has a timezone. Temporal has no timezone attached. You can collect an 'Instant' in time, and then select by Timezone.
                </li>
            </ul>
        </section>;
}
