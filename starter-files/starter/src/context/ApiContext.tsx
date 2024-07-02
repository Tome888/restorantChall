import { useEffect, useState } from "react";
import { createContext } from "react";

interface ChildrenProps {
    children: React.ReactElement;
  }
  
export interface Review {
    author: string;
    rating: number;
    comment: string;
    date: string;
    stars?: number
  }
  
  interface Restaurant {
    address: string;
    businessname: string;
    email: string;
    id: string;
    image: string;
    parkinglot: boolean;
    phone: string;
    restauranttype: string;
    reviews: number;
    reviewsList: Review[];
    slug: string;
  }
  
  interface DataContextProps {
    apiData: Restaurant[] | null;
  }
  
  export const Data = createContext<DataContextProps | undefined>(undefined);
  
  export function ApiContext({ children }: ChildrenProps): React.ReactElement {
    const [apiData, setApiData] = useState<Restaurant[] | null>(null);
  
    useEffect(() => {
      fetch('http://localhost:5001/restaurants')
        .then(res => res.json())
        .then(data => {
          setApiData(data);
          console.log(data);
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    }, []);
  
    return (
      <Data.Provider value={{ apiData }}>
        {children}
      </Data.Provider>
    );
  }

// interface ChildrenProps {
//     children: any;
//   }
  
//   interface Review {
//     author: string;
//     rating: number;
//     comment: string;
//     date: string;
//   }
  
//   interface Restaurant {
//     address: string;
//     businessname: string;
//     email: string;
//     id: string;
//     image: string;
//     parkinglot: boolean;
//     phone: string;
//     restauranttype: string;
//     reviews: number;
//     reviewsList: Review[];
//     slug: string;
//   }
  
//   interface DataContextProps {
//     apiData: Restaurant[] | null;
//   }
  
//   export const Data = createContext<DataContextProps | undefined>(undefined);
  
//   export function ApiContext({ children }: ChildrenProps): React.ReactElement {
//     const [apiData, setApiData] = useState<Restaurant[] | null>(null);
  
//     useEffect(() => {
//       fetch('http://localhost:5001/restaurants')
//         .then((res) => {
//           if (!res.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return res.json();
//         })
//         .then((data) => {
//           console.log('Fetched data:', data);
//           setApiData(data);
//         })
//         .catch((error) => {
//           console.error('Fetch error:', error);
//         });
//     }, []);
  
//     return (
//       <Data.Provider value={{ apiData }}>
//         {children}
//       </Data.Provider>
//     );
//   }