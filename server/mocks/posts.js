module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  postsRouter.get('/', function(req, res) {
    res.send({
      'posts': [

         {
  "id":"1",
  "img":"http://blog.bazaarvoice.com/wp-content/uploads/BVsearch-1024x528.jpg",
  "title":"Mapping consumer-generated content to the six bands of search",
  "author":"Brent Robinson",
  "date":"August 6th, 2015",
  "description":{
    "intro":"Consumer-generated content (CGC) such as ratings and reviews, questions and answers, testimonials and social media blurbs give your website many benefits in search. We’ve highlighted some of these reasons in past blog posts, such as here and here.",
    "body":"But this post discusses how customers search, and how it relates to CGC. Typically, all product and service-related online searches fall into one of six categories—or bands. These bands provide valuable information on how CGC can improve page relevance throughout the buyer’s journey, and boost website your traffic. Branded keywords (also called homepage-only keywords) Branded keyword searches happen when a consumer is familiar with your brand, often just browsing the web, while not having a specific product in mind. Queries may be your company name, a misspelling of your company name, or your entire domain entered directly into the search box. The best way to build branded keyword authority is with ‘old-fashioned’ branding activity, such as press releases, social media profiles, content marketing and owning a domain that matches your company name. It’s important to own both your domain name and common variations of your company name. If you’re doing this, you’re likely in good standing for specifically branded terms. While CGC has minimal impact on this band, it can still be beneficial as it increases branded keyword density throughout your site and, in some cases, on social sites where CGC has been shared."
  },
    "comments":[
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          }
    ]
},
{
    "id":"2",
  "img":"http://blog.bazaarvoice.com/wp-content/uploads/BVmall-1024x528.jpg",
  "title":"Eid al-Fitr – the new Black Friday for retailers?",
  "author":"Christopher Baldwin",
  "date":"July 30th, 2015",
  "description":{
    "intro":"The importance of the Black Friday weekend in US retail has been heavily documented in international news and trade press. Adobe, for example, reported that sales came in at a whopping $2.56bn in the US alone – that’s a 16% increase YoY. Furthermore, the top 25 US retailers generated $30m each, resulting in a 25% increase in online sales. Now, even we Brits have jumped on the Black Friday bandwagon. Last year, UK retail sales rose by 6.4% in one day – that’s the fastest annual rise in more than a decade!",
     "body":"Black Friday is vital for international retailers, for one reason alone – profit. The sales captured can total up to 10-15% of all sales in a retailer’s holiday season – those are sales that are very much needed and, difficult to ignore in such a competitive market. Adam Davidson from Planet Money summed it up nicely in one sentence:  “Billions of [pounds], which would otherwise never be spent, make their way into circulation”.  But what about Eid al-Fitr? For those who don’t know, Eid al-Fitr is a significant religious festival in the Muslim calendar; commonly abbreviated to Eid, it is the first of two Eid’s celebrated every year by Muslims worldwide. The festival marks the end of Ramadan – and for global retailers, presents a new opportunity and a specific segment of shoppers: cash-rich buyers from the Middle East. 2015 predictions, expected 35,000 Middle Eastern visitors to arrive into London, to partake in tax-free Eid shopping. Testament to this, Etihad Airways reported a 12% increase in passenger numbers over this period – that’s 291,518 more people, on an additional 83 flights. Of course, not all shoppers are travelling around the globe; many are shop online from the comfort of their own home. The names being hit include Macy’s, Harrods, Barbour and Aquascutum, as well as high street brands such as Zara, Topshop and Abercrombie & Fitch.  The opportunity for retailers is so significant, that the industry has coined the time of year as “the Ramadan rush”. Yet, lack of press coverage and awareness among global retailers mean there is still welcome opportunity, which is certainly needed, as other demographics reduce spending both domestically and internationally. Last year alone, retailers suffered from a crippling 44% decline in Russian spend (January – May 2014). Undoubtedly, a sizable portion of the opportunity will lie in cities such as London, Paris and New York – however, online still represents millions of pounds. There is also a trickle-down to other locations, for example in the UK, Manchester and Bicester Village should also be strategically targeting Eid shoppers. How much are they spending? Per transaction, approximately £1,457 per Qatari to £961 per Saudi Arabian, respectively (based on an average tax-free transaction spend).  Ka-ching."
  },
    "comments":[
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          }
    ]
},
{
  "id":"3",
  "img":"http://blog.bazaarvoice.com/wp-content/uploads/BVSearch-1024x528.jpg",
  "title":"The truth about search position, and how to optimize for search",
  "author":"Brent Robinson",
  "date":"July 28th, 2015",
  "description":{
    "intro":"Consumer-generated content (CGC) such as ratings and reviews, questions and answers, testimonials and social media blurbs give your website many benefits in search. We’ve highlighted some of these reasons in past blog posts, such as here and here.",
     "body":"But this post discusses how customers search, and how it relates to CGC. Typically, all product and service-related online searches fall into one of six categories—or bands. These bands provide valuable information on how CGC can improve page relevance throughout the buyer’s journey, and boost website your traffic. Branded keywords (also called homepage-only keywords) Branded keyword searches happen when a consumer is familiar with your brand, often just browsing the web, while not having a specific product in mind. Queries may be your company name, a misspelling of your company name, or your entire domain entered directly into the search box. The best way to build branded keyword authority is with ‘old-fashioned’ branding activity, such as press releases, social media profiles, content marketing and owning a domain that matches your company name. It’s important to own both your domain name and common variations of your company name. If you’re doing this, you’re likely in good standing for specifically branded terms. While CGC has minimal impact on this band, it can still be beneficial as it increases branded keyword density throughout your site and, in some cases, on social sites where CGC has been shared."
  },
    "comments":[
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          }
    ]
},
{
  "id":"4",
  "img":"http://blog.bazaarvoice.com/wp-content/uploads/SpotlightsHeader-1024x528.jpg",
  "title":"Adapt your business website to Google to win In search",
  "author":"Sara Spivey",
  "date":"July 1st, 2015",
  "description":{
    "intro":"Consumer-generated content (CGC) such as ratings and reviews, questions and answers, testimonials and social media blurbs give your website many benefits in search. We’ve highlighted some of these reasons in past blog posts, such as here and here.",
     "body":"But this post discusses how customers search, and how it relates to CGC. Typically, all product and service-related online searches fall into one of six categories—or bands. These bands provide valuable information on how CGC can improve page relevance throughout the buyer’s journey, and boost website your traffic. Branded keywords (also called homepage-only keywords) Branded keyword searches happen when a consumer is familiar with your brand, often just browsing the web, while not having a specific product in mind. Queries may be your company name, a misspelling of your company name, or your entire domain entered directly into the search box. The best way to build branded keyword authority is with ‘old-fashioned’ branding activity, such as press releases, social media profiles, content marketing and owning a domain that matches your company name. It’s important to own both your domain name and common variations of your company name. If you’re doing this, you’re likely in good standing for specifically branded terms. While CGC has minimal impact on this band, it can still be beneficial as it increases branded keyword density throughout your site and, in some cases, on social sites where CGC has been shared."
  },
    "comments":[
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          },
          {
            "comment":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!"
          }
    ]
}
      ]
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      'posts': {
        id: req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
