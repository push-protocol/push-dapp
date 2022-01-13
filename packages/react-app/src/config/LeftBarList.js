const leftBarList = {
    sections: {
      communicate: {
        src: "svg/communicate.svg",
        iconFactory: null,
        name: 'Communicate',
        title: 'Communicate Tab',
        alt: 'Communicate Tab Icon',
        href: null,
        newTab: false,
        isRoute: true,
        opened: true,
  
        drilldown: {
          inbox: {
            src: "svg/feedbox.svg",
            iconFactory: null,
            name: 'Inbox',
            title: 'Inbox',
            alt: 'Open Inbox',
            href: '/inbox',
            newTab: false,
            isRoute: true,
          },
          channels: {
            src: "svg/channel.svg",
            iconFactory: null,
            name: 'Channels',
            title: 'Browse Channels',
            alt: 'Open Channels',
            href: '/channels',
            newTab: false,
            isRoute: true,
          },
          spam: {
            src: "svg/feedbox.svg",
            iconFactory: null,
            name: 'Spam',
            title: 'Spam',
            alt: 'Open Spam',
            href: '/spam',
            newTab: false,
            isRoute: true,
          },  
          createChannel: {
            src: "svg/channeladmin.svg",
            iconFactory: null,
            name: 'Create Channel',
            title: 'Create Channel',
            alt: 'Create Channels / Dashboard',
            href: '/dashboard',
            newTab: false,
            isRoute: true,
          },
        }
      },
      govern: {
        src: "svg/govern.svg",
        iconFactory: null,
        name: 'Govern',
        title: 'Governance Tab',
        alt: 'Governance Tab Icon',
        href: '/govern',
        newTab: false,
        opened: false,
        isRoute: true,
      },
      incentives: {
        src: "svg/incentive.svg",
        iconFactory: null,
        name: 'Incentives',
        title: 'Check Incentives Tab',
        alt: 'Communicate Tab Icon',
        href: null,
        newTab: false,
        opened: true,
        isRoute: true,
  
        drilldown: {
          yield: {
            src: "svg/yield.svg",
            iconFactory: null,
            name: 'Yield Farming',
            title: 'Yield Farming',
            alt: 'Open Yield Farming',
            href: '/yield',
            newTab: false,
            isRoute: true,  
          },
          rockstars: {
            src: "svg/rockstars.svg",
            iconFactory: null,
            name: 'Rockstars of EPNS',
            title: 'Check Rockstars of EPNS',
            alt: 'Open Inbox',
            href: '/rockstar',
            newTab: false,
            isRoute: true,
          },
          airdrop: {
            src: "svg/gratitude.svg",
            iconFactory: null,
            name: 'Gratitude Drop',
            title: 'Check Gratitude Drop',
            alt: 'Open Gratitude Drop',
            href: '/gratitude',
            newTab: false,
            isRoute: true,
          },      
        }
      }
    },
    footer: {
      walkthrough: {
        src: "svg/channel.svg",
        iconFactory: null,
        name: 'Governance',
        title: 'Toggle Governance Tab',
        alt: 'Governance Tab Icon',
        href: '/governance',
        newTab: false,
        opened: false,
        isRoute: false,
      },
      another: {
        src: "svg/channel.svg",
        iconFactory: null,
        name: 'Governance',
        title: 'Toggle Governance Tab',
        alt: 'Governance Tab Icon',
        href: '/governance',
        newTab: false,
        opened: false,
        isRoute: true,
      },
      social: {
        twitter: {
          
        }
      }
    }
  }
  
  
  export default leftBarList;
  