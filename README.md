# [Pocketbase SvelteKit Template](https://github.com/HajdiBengu/pocketbase-sveltekit/#pocketbase-sveltekit-template)

[SvelteKit](https://kit.svelte.dev/) frontend + [Pocketbase](https://pocketbase.io/) backend. Live demo [here](https://www.example.com).

## [Table of Contents](https://github.com/HajdiBengu/pocketbase-sveltekit/#table-of-contents)

-   [General Info](https://github.com/ritaly/README-cheatsheet#general-information)
-   [Technologies Used](https://github.com/HajdiBengu/pocketbase-sveltekit/#technologies-used)
-   [Features](https://github.com/HajdiBengu/pocketbase-sveltekit/#features)
-   [Screenshots](https://github.com/HajdiBengu/pocketbase-sveltekit/#screenshots)
-   [Setup & Usage](https://github.com/HajdiBengu/pocketbase-sveltekit/#setup-&-usage)
-   [Project Status](https://github.com/HajdiBengu/pocketbase-sveltekit/#project-status)
-   [Room for Improvement](https://github.com/HajdiBengu/pocketbase-sveltekit/#room-for-improvement)
-   [Contact](https://github.com/HajdiBengu/pocketbase-sveltekit/#contact)

## [General Information](https://github.com/HajdiBengu/pocketbase-sveltekit/#general-information)

This project is an application that integrates a frontend web app made with SvelteKit and a backend that’s run on Pocketbase.

The focus is on building a CRUD application: users can create, read, update and delete their projects in-app, but it can be extendable to any data type. The app has register & login functionalities, password authentication, email verification, input validation, account settings and protected routes.

The purpose of the project is to serve as a fully extendable template for more complex apps built on top of SvelteKit and Pocketbase.

## [Technologies & Libraries Used](https://github.com/HajdiBengu/pocketbase-sveltekit/#technologies-&-libraries-used)

-   SvelteKit - version 1.20.4
-   Svelte - version 4.0.5
-   Pocketbase - version 0.18.0
-   Zod - version 3.22.2
-   Tailwind - version 3.3.2
-   DaisyUI - version 3.8.1
-   Postcss - version 8.4.24
-   Svelte French Toast - version 1.2.0
-   Svelte Hero Icons - version 5.0.0
-   Mailgun
    

## [Features](https://github.com/HajdiBengu/pocketbase-sveltekit/#features)

This is a list of the most useful (but not all) features of the app:

-   Sign up & Login Functionalities
-   Email Verification with Mailgun
-   CRUD application
-   Input Validation with Zod
-   Account, Email and Security Settings
-   Protected Routes
    

## [Screenshots](https://github.com/HajdiBengu/pocketbase-sveltekit/#screenshots)

![](https://lh5.googleusercontent.com/_4Mb0LfuzemCn_6IPZcrvLmHBI5pE_dpaQw74rHluZ1fuN8OvYsq26ZHSqCANAXsPEflduMZfGsryMZ2HvRtaOOSEAIopTR7LTL36L2M_F1KAl-Vr3ejzVYNxBmfdxYvRtAy4gQjTK-exXoopkKcvTM)

![](https://lh3.googleusercontent.com/hXbyudwI73udJEJkcWGxobCKyFZ3sGOcplwZWH5mdB-smyiPSvs0-v6s1wiyXOppUuFfqc694dbac_u30vcywFdwkOKNUFqojwpqNTbmMtWT0pZ14XBGWMom--DRMH_mg1zcdTGA9WbqnsZYVSjKbj8)![](https://lh3.googleusercontent.com/wbYflmgSRXekoroEaMxfWKn8-hVrrejikjkQnnyAtOcWBAiP5clD0eZt08NTJKihdvHWSefAQj8gc3Flk-z_FzDz-mHEltTWK5gdB5GepLVqove-o8z3U6ddtbt3rgFF4HFJ2cJ1D6QLKgGlPvOz3gU)

## [Setup & Usage](https://github.com/HajdiBengu/pocketbase-sveltekit/#setup-&-usage)

  

I have set up a live demo on [Vercel](ww). I have also hosted an instance of Pocketbase on [Pockethost](https://pockethost.io/). You can use the live demo by logging in with the account I have set up. Contact me at [hajdibengu@protonmail.com](mailto:hajdibengu@protonmail.com) for credentials.

There’s not much you can do with one account though, since routes are protected and many functionalities use email verification to authenticate. You can set up your own instance of this app on your local machine by following the instructions below:

### SMTP Provider:
    

You will need a SMTP Email Provider that Pocketbase can use to send automatic emails to authorized users. There are lots of SMTP providers with free tiers of service. In my project I used [Mailgun](https://www.mailgun.com/), but any of them will do.

After creating an account, you may need to add some authorized recipients (email addresses that you have access to). You can only use those authorized addresses to interact with the app. Finally, all Pocketbase requires from the provider are:

- Username,
- Password,
- Port,
- SMTP Server host url

Note them down, because we’ll need them later.

### Backend:
    

Clone this project:

    git clone https://github.com/HajdiBengu/pocketbase-sveltekit.git

In order to have a clean instance of Pocketbase, remove everything from the ***backend*** directory.

In that same directory, download and install Pocketbase by following the instructions of [Pocketbase documentation](https://pocketbase.io/docs/). (Keep in mind that it comes in a zip file, so you need to extract it first)

As mentioned in the documentation, use the CLI to run the pocketbase instance

    ./pocketbase serve

It is hosted on your local machine, so go to [http://127.0.0.1:8090/_/](http://127.0.0.1:8090/_/) for the Admin UI. Create an admin account and login.

In order to integrate with the frontend, you will need the same database schemas as this project’s. Luckily, you can easily import it:

- Download the ***pb_schema*** JSON file from [here](https://github.com/HajdiBengu/pocketbase-sveltekit-schema-json/blob/main/pb_schema.json)
- Go to ***Settings*** > ***Import Collection's*** > ***Load from JSON file***
- upload the ***pb_schema*** file you downloaded.

### Mail settings

Set up SMTP provider in Pocketbase by going to:

- ***Settings*** > ***Mail settings***
- Enter the Username that you got from your SMTP provider to Sender address
- Toggle “Use SMTP mail server”
- In the dropdown menu enter the info you got from your provider.

Your backend is ready to go.

### Frontend

    

Go to the frontend directory of the project and open it in your preferred editor. Open the CLI to nstall dependencies:

    npm install

Because I have hosted my Pocketbase instance online, there are a couple of things we need to update in the code.

Inside ***src***, open ***hooks.server.js*** and update line 8:

    event.locals.pb = new PocketBase('[https://pocketbase-sveltekit.pockethost.io](https://pocketbase-sveltekit.pockethost.io)');

to

    event.locals.pb = new PocketBase('[http://127.0.0.1:8090/](http://127.0.0.1:8090/)’);

Inside ***src/lib***, open ***utils.js*** and update line 13:

    return [https://pocketbase-sveltekit.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size](https://pocketbase-sveltekit.pockethost.io/api/files/$%7BcollectionId%7D/$%7BrecordId%7D/$%7BfileName%7D?thumb=$%7Bsize)}`;

to

    return [http://localhost:8090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size](http://localhost:8090/api/files/$%7BcollectionId%7D/$%7BrecordId%7D/$%7BfileName%7D?thumb=$%7Bsize)};

Your app is ready to run. Don’t forget to run the Pocketbase server while you try to interact with the app. Open the CLI inside the frontend directory and run

    npm run dev

## [Project Status](https://github.com/HajdiBengu/pocketbase-sveltekit/#project-status)

Project is in progress. It can be used as a template for more complex problems, but has room for improvement and different styling with *shadcn-svelte*.

## [Room for Improvement](https://github.com/HajdiBengu/pocketbase-sveltekit/#room-for-improvement)

Room for improvement:

-   Can use *shadcn-svelte* components to make styling easier.
-   Can use *formsnap* and *sveltekit-superforms* to work with Form Components.
-   A feature that filters projects by user (owner) can be added.
    

Please, don’t hesitate to contact me if you see any aspects of the project that can be improved.

## [Contact](https://github.com/HajdiBengu/pocketbase-sveltekit/#contact)

Created by [HajdiBengu](https://github.com/HajdiBengu) - feel free to contact me at:

hajdibengu@protonmail.com
[LinkedIn](https://www.linkedin.com/in/hajdi-bengu/)
[Braintrust](https://app.usebraintrust.com/talent/261507/)
[Contribute](https://www.contribute.xyz/Hajdi)
