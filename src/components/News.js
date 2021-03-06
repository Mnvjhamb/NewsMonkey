import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const a = [
    {
      source: { id: "cnn", name: "CNN" },
      author: "Madeline Holcombe, CNN",
      title:
        "Doctors in these states could soon be forced to make tough choices about who gets an ICU bed, Fauci warns - CNN",
      description:
        "Some hospitals in the United States are growing close to reaching full capacity as Covid-19 continues to spread, and soon officials could be making choices about who gets an ICU bed, Dr. Anthony Fauci told CNN.",
      url: "https://www.cnn.com/2021/09/06/health/us-coronavirus-monday/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/210905225753-02-us-coronavirus-monday-super-tease.jpg",
      publishedAt: "2021-09-06T09:10:00Z",
      content:
        "(CNN)Some hospitals in the United States are growing close to reaching full capacity as Covid-19 continues to spread, and soon officials could be making choices about who gets an ICU bed, Dr. Anthony… [+5718 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Michelle Toh, Sasha Chua and Chandler Thornton, CNN Business",
      title:
        "'A climate of fear': Hong Kong media company behind shuttered Apple Daily admits defeat - CNN",
      description:
        'The media company behind the now-shuttered Hong Kong tabloid Apple Daily is shutting down after its entire board resigned, citing "a climate of fear" over the city\'s controversial national security law.',
      url: "https://www.cnn.com/2021/09/06/media/next-digital-apple-daily-liquidation-intl-hnk/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/210906020255-next-digital-headquarters-restricted-super-tease.jpg",
      publishedAt: "2021-09-06T09:00:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "ROD McGUIRK",
      title:
        "3-year-old boy found after 3 days' lost in Australian woods - Yahoo News",
      description:
        "A 3-year-old boy wearing a sweat shirt and diapers was found sitting in a creek and cupping water in his hands to drink on Monday, three days after he was...",
      url: "https://news.yahoo.com/3-old-boy-found-3-082102690.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/jnzf30D9YNC.nIfQNZGwVQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/uu/api/res/1.2/oOgnm59JTT3BbzrKpFVnqQ--~B/aD0zMzMzO3c9NTAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/ap.org/22437195debcb635f9cd3cde87917723",
      publishedAt: "2021-09-06T08:21:02Z",
      content:
        "CANBERRA, Australia (AP) A 3-year-old boy wearing a sweat shirt and diapers was found sitting in a creek and cupping water in his hands to drink on Monday, three days after he was lost in rugged Aust… [+1855 chars]",
    },
    {
      source: { id: null, name: "TMZ" },
      author: "TMZ Staff",
      title:
        "Machine Gun Kelly Accused of Battery on Parking Attendant During Movie Shoot - TMZ",
      description: "Machine Gun Kelly accused of battery.",
      url: "https://www.tmz.com/2021/09/06/machine-gun-kelly-alleged-battery-pushed-parking-attendant-police-report-investigation/",
      urlToImage:
        "https://imagez.tmz.com/image/2e/16by9/2021/08/31/2ee37d879bb64011ad6ab832aa02648b_xl.jpg",
      publishedAt: "2021-09-06T08:00:00Z",
      content:
        "Machine Gun Kelly's first time directing a movie is already eventful -- a parking lot attendant is accusing him of battery ... something folks on the movie set say simply did not happen.\r\nLaw enforce… [+1327 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Edmund DeMarche",
      title:
        "Florida sheriff calls shooting suspect a ‘coward,’ deputies would have ‘shot him up a lot’ - Fox News",
      description:
        "Bryan Riley, the accused Florida gunman accused of killing four random people — including a mother and a 3-month-old baby — is a “coward” for surrendering to police while unarmed in order to be arrested, Polk County Sheriff Grady Judd said Sunday.",
      url: "https://www.foxnews.com/us/florida-sheriff-calls-shooting-suspect-coward",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2021/09/7862b3bb-Florida-Shooting.jpg",
      publishedAt: "2021-09-06T07:26:34Z",
      content:
        'The Florida gunman accused of killing four random people including a mother and a 3-month-old baby is a "coward" for surrendering to police while unarmed in order to be arrested, Polk County Sheriff … [+4028 chars]',
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Arjun Kharpal",
      title:
        "JD.com appoints new president as founder steps back from day-to-day operations - CNBC",
      description:
        "JD.com's founder and CEO Richard Liu is stepping back from day-to-day operations. Xu Lei will take up the newly-created role of president.",
      url: "https://www.cnbc.com/2021/09/06/jdcom-appoints-new-president-founder-to-focus-on-long-term-strategy.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/105278155-GettyImages-694042970.jpg?v=1536107141",
      publishedAt: "2021-09-06T07:03:55Z",
      content:
        "Richard Liu, founder and chief executive officer of JD.com.\r\nGUANGZHOU, China JD.com's founder and CEO Richard Liu is stepping back from day-to-day operations while the Chinese e-commerce giant said … [+1955 chars]",
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Kenneth Garger",
      title:
        "US Navy IDs 5 sailors killed in helicopter crash off California - New York Post ",
      description:
        "The US Navy has identified the five sailors who died in a helicopter crash off the coast of San Diego last week.",
      url: "https://nypost.com/2021/09/06/us-navy-ids-dead-sailors-bradley-foster-paul-fridley-james-buriak-sarah-burns-bailey-tucker-killed-in-helicopter-crash/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2021/09/helicopter-crash-victims-2.jpg?quality=90&strip=all&w=1024",
      publishedAt: "2021-09-06T06:18:00Z",
      content:
        "The US Navy has identified the five sailors who died in a helicopter crash off the coast of San Diego last week.\r\nThe victims are Lt. Bradley Foster, 29, a pilot from Oakhurst, California; Lt. Paul F… [+1596 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Hugo Lowell",
      title:
        "Republicans in crosshairs of 6 January panel begin campaign of intimidation - The Guardian",
      description:
        "House leader Kevin McCarthy threatened retaliation against tech companies that share records with the committee",
      url: "https://amp.theguardian.com/us-news/2021/sep/06/republicans-6-january-investigation-intimidation",
      urlToImage:
        "https://i.guim.co.uk/img/media/99c0e90971b82941c48ab18076aaf40aa07ae0ba/0_188_7044_4228/master/7044.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=75e13acf42202a8e8171de40d59daad7",
      publishedAt: "2021-09-06T06:00:00Z",
      content:
        "Top Republicans under scrutiny for their role in the events of 6 January have embarked on a campaign of threats and intimidation to thwart a Democratic-controlled congressional panel that is scrutini… [+5820 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Rachel Pannett, Haq Nawaz Khan",
      title:
        "Afghanistan news: Taliban advances into Panjshir Valley as resistance leader says ready for talks - The Washington Post",
      description:
        "A senior official of the National Resistance Front confirmed that the Taliban had taken over, though the movement said on Facebook that the 'resistance will continue.'",
      url: "https://www.washingtonpost.com/world/2021/09/06/afghanistan-kabul-taliban-updates/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7QTPBBAMBEI6ZJ6IMG5XWO7WFA.jpg&w=1440",
      publishedAt: "2021-09-06T05:55:26Z",
      content:
        "A senior official of the National Resistance Front of Afghanistan, who spoke on the condition of anonymity due to the sensitivity of the matter, confirmed that the Taliban had taken over. Yes, Panjsh… [+5971 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Zixu Wang and Sophie Jeong, CNN",
      title:
        "Jan Hecker, German ambassador to China, dies just a few weeks into his posting - CNN",
      description:
        "The German Ambassador to China, Jan Hecker, has died suddenly at 54, after only a few weeks in his position, according to a statement posted on the German Embassy to China's website on Monday.",
      url: "https://www.cnn.com/2021/09/06/europe/germany-jan-hecker-death-intl-hnk/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/210906001114-01-jan-hecker-file-super-tease.jpg",
      publishedAt: "2021-09-06T05:37:00Z",
      content:
        "(CNN)The German Ambassador to China, Jan Hecker, has died suddenly at 54, after only a few weeks in his position, according to a statement posted on the German Embassy to China's website on Monday. \r… [+1435 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Patrick Frater",
      title:
        "Rare ‘Tomorrow War’ Theatrical Release Scores $8 Million in China - Yahoo Entertainment",
      description:
        "“Free Guy” held on strongly to grab a second weekend at the top of the mainland China box office. It beat an unusual theatrical release for “The Tomorrow War...",
      url: "https://www.yahoo.com/entertainment/rare-tomorrow-war-theatrical-release-043912016.html",
      urlToImage:
        "https://s.yimg.com/uu/api/res/1.2/xCNkzdYi2teEa8tjcKX_0w--~B/aD01NjI7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/variety.com/053a07956e39b1769e4b97ee1accabfb",
      publishedAt: "2021-09-06T04:47:40Z",
      content:
        "Free Guy held on strongly to grab a second weekend at the top of the mainland Chinabox office. It beat an unusual theatrical release for The Tomorrow War, which has gone straight to streaming in othe… [+2131 chars]",
    },
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Jack Baer",
      title:
        "Here's why Notre Dame coach Brian Kelly called for his entire team to be executed after OT win over FSU - Yahoo Sports",
      description: "It was an honest mistake.",
      url: "https://sports.yahoo.com/notre-dame-coach-brian-kelly-entire-team-executed-ot-win-florida-state-040948891.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/LKwRj56W2YAwMnz2I3ZAJg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-09/061eecd0-0ecc-11ec-9fcc-1f27d94613a0",
      publishedAt: "2021-09-06T04:09:00Z",
      content:
        "Sometimes, coaches aren't satisfied with their top 10 team after getting taken to overtime by an unranked team. And sometimes, they're so unsatisfied they call for the entire team to be executed.\r\nTh… [+2615 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Edmund DeMarche",
      title:
        "Fauci names new COVID-19 variant health officials are ‘keeping an eye on’ - Fox News",
      description:
        "Dr. Anthony Fauci, the top disease expert in the U.S., said in an interview Sunday that health officials are keeping an eye on the COVID-19 Mu variant to see if it emerges to become more dominant.",
      url: "https://www.foxnews.com/health/fauci-names-new-covid-19-variant-health-officials-are-keeping-an-eye-on",
      urlToImage:
        "https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/3a8303dc-f91e-4ab2-9aac-f0debe60a621/ef8beda7-7e28-4758-885c-03a829431b72/1280x720/match/image.jpg",
      publishedAt: "2021-09-06T03:59:28Z",
      content:
        "Dr. Anthony Fauci, the top disease expert in the U.S., said in an interview Sunday that health officials are keeping an eye on the COVID-19 Mu variant to see if it emerges to become more dominant. \r\n… [+1251 chars]",
    },
    {
      source: { id: null, name: "MLSsoccer.com" },
      author: "mlssoccer",
      title:
        "USMNT player ratings: Tyler Adams, Miles Robinson meet expectations in WCQ vs. Canada | MLSSoccer.com - MLSsoccer.com",
      description:
        "After a 1-1 home stalemate against Canada, it's now two straight draws for the US men's national team as their bid to qualify for the 2022 FIFA World Cup in Qatar escalates.\nHere's how players fared at Nashville's Nissan Stadium, with frustration building aft…",
      url: "https://www.mlssoccer.com/news/usmnt-player-ratings-tyler-adams-miles-robinson-meet-expectations-in-wcq-vs-cana",
      urlToImage:
        "https://images.mlssoccer.com/image/private/t_q-best/prd-league/sihvbmfrzzglx927gc0q.png",
      publishedAt: "2021-09-06T03:22:30Z",
      content: null,
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "Playoff drivers face disaster all day at Darlington | NASCAR Cup Series Extended Highlights - NASCAR",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9d0pGNXoxUmxJdE3SAQA?oc=5",
      urlToImage: null,
      publishedAt: "2021-09-06T03:00:14Z",
      content: null,
    },
    {
      source: { id: "nbc-news", name: "NBC News" },
      author: "The Associated Press",
      title:
        "Soldiers detain Guinea's president, dissolve government - NBC News",
      description:
        "Mutinous soldiers in Guinea detained President Alpha Conde on Sunday and announced the government had been dissolved in an apparent coup d’ etat.",
      url: "https://www.nbcnews.com/news/world/soldiers-detain-guinea-s-president-dissolve-government-n1278552",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_35/3503856/210905-guinea-military-axc-1043p.jpg",
      publishedAt: "2021-09-06T02:55:00Z",
      content:
        "CONAKRY, Guinea Mutinous soldiers in the West African nation of Guinea detained President Alpha Conde on Sunday after hours of heavy gunfire rang out near the presidential palace in the capital, then… [+5326 chars]",
    },
    {
      source: { id: "nbc-news", name: "NBC News" },
      author: "Tim Stelloh",
      title:
        "South Carolina lawyer Alex Murdaugh suffered 'superficial' injuries in shooting, authorities say - NBC News",
      description:
        "South Carolina lawyer Alex Murdaugh, whose wife and son were fatally shot nearly three months ago, suffered a “superficial” gunshot to the head and is expected to recover.",
      url: "https://www.nbcnews.com/news/us-news/south-carolina-lawyer-alex-murdaugh-suffered-superficial-injuries-shooting-authorities-n1278550",
      urlToImage:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_24/3483159/210615-paul-murdaugh-mn-0830.jpg",
      publishedAt: "2021-09-06T02:31:00Z",
      content:
        "Prominent South Carolina lawyer Alex Murdaugh, whose wife and son were fatally shot nearly three months ago, suffered a superficial gunshot to the head and is expected to recover, authorities and rel… [+1755 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Choe Sang-Hun",
      title:
        "As Afghan Refugee Crisis Unfolds, Koreans Recall ‘Miracle’ Evacuation - The New York Times",
      description:
        "The U.S. military evacuated 91,000 people out of a North Korean port in 1950. By some estimates, it was the single largest wartime refugee evacuation in American history until Afghanistan.",
      url: "https://www.nytimes.com/2021/09/06/world/asia/korean-war-evacuation-afghanistan.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/09/02/world/00korea-evacuation-01/00korea-evacuation-01-facebookJumbo.jpg",
      publishedAt: "2021-09-06T02:27:50Z",
      content:
        "When the Americans retreated, fear spread through Hungnam. Its streets and harbor were flooded with people shouting for lost family members, babies screaming and military police officers blowing whis… [+1503 chars]",
    },
    {
      source: { id: null, name: "Fox Business" },
      author: "Reuters",
      title:
        "Oil extends losses after deep cuts to Saudi crude prices for Asia - Fox Business",
      description:
        "Oil prices extended losses on Monday after the world's top exporter Saudi Arabia slashed crude prices for Asia over the weekend, signalling that global markets are well supplied.",
      url: "https://www.foxbusiness.com/markets/oil-extends-losses-after-deep-cuts-to-saudi-crude-prices-for-asia",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/01/0/0/oil-equipment-iStock.jpg?ve=1&tl=1",
      publishedAt: "2021-09-06T02:27:34Z",
      content:
        "SINGAPORE - Oil prices extended losses on Monday after the world's top exporter Saudi Arabia slashed crude prices for Asia over the weekend, signalling that global markets are well supplied.\r\nBrent c… [+1627 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "David McKenzie, CNN",
      title:
        "Former South African President Zuma released from prison on medical parole - CNN",
      description:
        "Jacob Zuma, the former South African President, has been released from prison on medical parole due to ill health, the government's correctional services department said Sunday.",
      url: "https://www.cnn.com/2021/09/05/africa/jacob-zuma-medical-parole-intl-hnk/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/180206114738-01-jacob-zuma-0128-super-tease.jpg",
      publishedAt: "2021-09-06T02:27:00Z",
      content:
        "Johannesburg (CNN)Former South African President Jacob Zuma has been released from prison on medical parole due to ill health, the government's correctional services department said Sunday. \r\nZuma, 7… [+758 chars]",
    },
  ];

  const [articles, setArticles] = useState(a);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(100);
  const [loading, setLoading] = useState(true);

  const getNews = async (page = 1) => {
    props.setProgress(40);
    setLoading(true);
    var url = `https://newsapi.org/v2/${
      !props.searched
        ? `top-headlines?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`
        : `everything?q=${props.searched}`
    }&apiKey=${props.apiKey}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setPage(page);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    getNews();
  }, []);

  const fetchMoreData = async () => {
    var p = page + 1;
    var url = `https://newsapi.org/v2/${
      !props.searched
        ? `top-headlines?country=${props.country}&category=${props.category}&page=${p}&pageSize=${props.pageSize}`
        : `everything?q=${props.searched}`
    }&apiKey=${props.apiKey}`;
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setPage(p);
    setTotalResults(parsedData.totalResults);
  };

  const capatlize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div
      className="d-flex flex-column align-items-center my-3"
      style={{ marginTop: "5em" }}
    >
      <h2 className="mt-5 mb-3">
        NewsMonkey - Top Headlines - {capatlize(props.category)}
      </h2>

      {loading ? (
        <Spinner />
      ) : (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="row d-flex justify-content-center">
            {articles.map((element) => {
              return (
                <NewsItem
                  title={element.title ? element.title.slice(0, 50) : ""}
                  description={
                    element.description ? element.description.slice(0, 60) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default News;
