module.exports = {
  apps: [
    {
      name: 'NuxtApp',
      exec_mode: 'cluster',
      instances: '4', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      // error_file: '/data/webdata/log/nuxt/nuxt.error.log',
      // out_file: '/data/webdata/log/nuxt/nuxt.out.log'
    }
  ]
}