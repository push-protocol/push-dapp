const leftBarList = {
    sections: {
      communicate: {
        src: "svg/communicate.svg",
        name: 'Communicate',
        title: 'Communicate Tab',
        alt: 'Communicate Tab Icon',
        href: null,
        newTab: false,
        opened: true,
  
        drilldown: {
          inbox: {
            src: "svg/feedbox.svg",
            name: 'Inbox',
            title: 'Inbox',
            alt: 'Open Inbox',
            href: '/inbox',
            newTab: false,
          },
          channels: {
            src: "svg/channel.svg",
            name: 'Channels',
            title: 'Browse Channels',
            alt: 'Open Channels',
            href: '/channels',
            newTab: false,
          },
          spam: {
            src: "svg/feedbox.svg",
            name: 'Spam',
            title: 'Spam',
            alt: 'Open Spam',
            href: '/spam',
            newTab: false,
          },  
          createChannel: {
            src: "svg/channeladmin.svg",
            name: 'Create Channel',
            title: 'Create Channel',
            alt: 'Create Channels / Dashboard',
            href: '/dashboard',
            newTab: false,
            createChannel: true,
          },
        }
      },
      govern: {
        src: "svg/govern.svg",
        name: 'Govern',
        title: 'Governance Tab',
        alt: 'Governance Tab Icon',
        href: '/govern',
        newTab: false,
        opened: false,
      },
      incentives: {
        src: "svg/incentive.svg",
        name: 'Incentives',
        title: 'Check Incentives Tab',
        alt: 'Communicate Tab Icon',
        href: null,
        newTab: false,
        opened: true,
  
        drilldown: {
          yield: {
            src: "svg/yield.svg",
            name: 'Yield Farming',
            title: 'Yield Farming',
            alt: 'Open Yield Farming',
            href: '/yield',
            newTab: false,
          },
          rockstars: {
            src: "svg/rockstars.svg",
            name: 'Rockstars of EPNS',
            title: 'Check Rockstars of EPNS',
            alt: 'Open Inbox',
            href: '/rockstar',
            newTab: false,
          },
          airdrop: {
            src: "svg/gratitude.svg",
            name: 'Gratitude Drop',
            title: 'Check Gratitude Drop',
            alt: 'Open Gratitude Drop',
            href: '/gratitude',
            newTab: false,
          },      
        }
      }
    },
    footer: {
      walkthrough: {
        src: "svg/channel.svg",
        name: 'Governance',
        title: 'Toggle Governance Tab',
        alt: 'Governance Tab Icon',
        href: '/governance',
        newTab: false,
        opened: false,
      }
    }
  }
  
  
  export default leftBarList;
  