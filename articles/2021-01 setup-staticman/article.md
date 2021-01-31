---
title: "Setup staticman as blog comment solution"
date: "2021-01-30"
tags: ["projects"]
slug: "setup-staticman-with-gatsby"
---

After I [set up my blog](https://www.jmeischner.com/1/How%20I%20created%20my%20own%20Blog/) it became obvious that one major feature is missing: a comment area. I did some research and it seems that [disqus](https://disqus.com) is the major player in that regard. As I don’t want to spend money for that I dug further and found [Staticman](https://staticman.net) which is an awesome solution to enable static webpages to include some user generated content. A simple use case for that kind of solution could be a comment area.

Staticman itself states that it is easily to host via Herokus free tier and provides documentation for its configuration values but unfortunately does not include a detailed plan **how** to set up a [Heroku](https://www.heroku.com/home) based hosting for it.

## Heroku Setup

The Staticman team is so kind to provide a button to deploy to Heroku in its[Github ReadMe](https://github.com/eduardoboucas/staticman). 

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/eduardoboucas/staticman) 

Enter an *App Name* and chose a region and click on **Deploy App**. Afterwards Heroku does the first deployment. When it finishes open your new app. Now follows the customization of the newly deployed instance.

To allow Staticman to create a Merge Request in your Github Page Repository you need to provide a personal access token to it. You can create one in your personal *Github Settings \> Developer Settings \> Personal access tokens*. Create a new one and select the *repo* and *user* scopes and click on *Generate Token*. Copy your token and go back to your Heroku App *Settings \> Config Vars* and add `GITHUB_TOKEN` with the value you just copied, so that it looks similar to this:
![](github-token.png)

The second thing you need is a RSA Key. You can easily generate one in your terminal via
```bash
> openssl genrsa
```
And copy everything starting with  `-----BEGIN RSA PRIVATE KEY-----` and including the end `-----END RSA PRIVATE KEY-----` to your clipboard. Create a new *Config Var* in your Heroku app and call it `RSA_PRIVATE_KEY` and use the copied RSA Key as value.

After this is done everything should work and you should see a success message after you open your app in your browser
![](open-staticman.png)

## Gatsby

1. Use configurations in `staticman.yml` as needed
2. Create a small form to add a comment
3. Create a list of existing comments
