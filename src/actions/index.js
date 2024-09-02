'use server'


// Fetching Global Data
export  const globalData = async () => {
    const globalstatsurl = 'https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl';
    const goptions = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(globalstatsurl, goptions);
        const data = await response.json();

        if (data.status) {
            return {
                success: true,
                globalstats: data,
            };
            } else {
            return {
                success: false,
                message: "Some error occured! Please try again",
            };
            }
            
            
    } catch (error) {
        console.log(error);
        return {
          success: false,
          message: "Some error occured! Please try again",
        };
      }
}

// Fetching Coins Data
export  const coinsData = async () => {
    const coinsurl = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';

    const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(coinsurl, options);
        const data = await response.json();
        if (data.status) {
            return {
                success: true,
                coinsstats: data,
            };
            } else {
            return {
                success: false,
                message: "Some error occured! Please try again",
            };
            }
            
            
    } catch (error) {
        console.log(error);
        return {
          success: false,
          message: "Some error occured! Please try again",
        };
      }

}

// Fetching News Data
export  const newsData = async () => {
    const newsurl = 'https://crypto-news16.p.rapidapi.com/news/top/10';

    const newsoption = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': 'crypto-news16.p.rapidapi.com'
        }
      };
    try {
        const response = await fetch(newsurl, newsoption);
        const data = await response.json();

        if (data) {
            
            return {
                success: true,
                newsstats: data,
            };
            } else {
            return {
                success: false,
                message: "Some error occured! Please try again",
            };
            }
            
            
    } catch (error) {
        console.log(error);
        return {
          success: false,
          message: "Some error occured! Please try again",
        };
      }
}

// Fetching Image Data
export  const imageData = async () => {
   const imgurl = 'https://api.pexels.com/v1/search?per_page=200&query=Cryptocurrency';

   const imgoption = {
    method: 'GET',
    headers:{
      Authorization : process.env.REACT_APP_IMG_API_KEY
    }
  }

  try {
    const response = await fetch(imgurl, imgoption);
    const data = await response.json();

    if (data) {
        
        return {
            success: true,
            imagestats: data,
        };
        } else {
        return {
            success: false,
            message: "Some error occured! Please try again",
        };
        }
    } catch (error) {
        console.log(error);
        return {
        success: false,
        message: "Some error occured! Please try again",
        };
    }
        
        
}

// Fteching Exchanges 
export  const exchangesData = async () => {
    const exchangeurl = 'https://api.coingecko.com/api/v3/exchanges'
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': process.env.REACT_APP_EXCHANGE_API_KEY}
      };
    
      try {
        const response = await fetch(exchangeurl, options);
        const data = await response.json();
        
        if (data) {
            
            return {
                success: true,
                exchangestats: data,
            };
            } else {
            return {
                success: false,
                message: "Some error occured! Please try again",
            };
            }
        } catch (error) {
            console.log(error);
            return {
            success: false,
            message: "Some error occured! Please try again",
            };
        }
            
            
    }

// Fetching Chart Data
export  const cryptoDetails = async (params, timePeriod) => {
    const coinurl = `https://coinranking1.p.rapidapi.com/coin/${params.id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`;
    const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
      };
    
      try {
        const response = await fetch(coinurl, options);
        const data = await response.json();
        
        if (data) {
            
            return {
                success: true,
                cryptodata: data,
            };
            } else {
            return {
                success: false,
                message: "Some error occured! Please try again",
            };
            }
        } catch (error) {
            console.log(error);
            return {
            success: false,
            message: "Some error occured! Please try again",
            };
        }
            
            
    }

export  const chartDetails = async (params, timePeriod) => {
    const charturl = `https://coinranking1.p.rapidapi.com/coin/${params.id}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`;
    const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
      };
    
      try {
        const response = await fetch(charturl, options);
        const data = await response.json();
        
        if (data) {
            
            return {
                success: true,
                chartdata: data,
            };
            } else {
            return {
                success: false,
                message: "Some error occured! Please try again",
            };
            }
        } catch (error) {
            console.log(error);
            return {
            success: false,
            message: "Some error occured! Please try again",
            };
        }
            
            
    }

    // Fetching News from search
    export  const newsSearch = async (userValue) => {
    const newsurl = `https://crypto-news34.p.rapidapi.com/${userValue}`;
        const options = {
            method: 'GET',
            headers: {
              'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
              'x-rapidapi-host': 'crypto-news34.p.rapidapi.com'
            }
          };
        
          try {
            const response = await fetch(newsurl, options);
            const data = await response.json();
            
            if (data) {
                
                return {
                    success: true,
                    newsdata: data,
                };
                } else {
                return {
                    success: false,
                    message: "Some error occured! Please try again",
                };
                }
            } catch (error) {
                console.log(error);
                return {
                success: false,
                message: "Some error occured! Please try again",
                };
            }
                
                
        }