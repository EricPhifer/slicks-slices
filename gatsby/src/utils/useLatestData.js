import { useEffect, useState } from 'react';

const gql = String.raw;

const details = `
    name
    _id
    image {
      asset {
        url
        metadata {
            lqip
        }
      }
    }
`;

export default function useLatestData() {
  // Hot Slices
  const [hotSlices, setHotSlices] = useState();
  // Slicemasters
  const [slicemasters, setSlicemasters] = useState();
  useEffect(function () {
    // When component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                ${details}
              }
              hotSlices {
                ${details}
            }
          }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.slicemaster);
      })
      .catch((err) => {
        console.log('Something went wrong');
        console.log(err);
      });
  }, []);
  return {
    hotSlices,
    slicemasters,
  };
}
