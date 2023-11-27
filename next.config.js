/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'farcapital.com.my'
    },{
      protocol: 'https',
      hostname: 'cms.dailysocial.id'
    },{
      protocol: 'https',
      hostname: 'finata.id'
    },{
      protocol: 'https',
      hostname: 's3.amazonaws.com'
    },{
      protocol: 'https',
      hostname: 'image4.owler.com'
    },{
      protocol: 'https',
      hostname: 'indorelawan-production.nos.wjv-1.neo.id'
    }]
  }
}

module.exports = nextConfig
