# Outline My Portfolio/Blog Site

This is the outline for a website that is a Portfolio | Blog app, using Node, Express and PostgreSQL, that has the ability to store and retrieve blog posts from a postgres database. This site will have a portfolio page that allows me to showcase my projects and a blog that allows me to display what people a posting on my site on a page.

## Goals

* Provide a link to all my completed projects
* Provide a list of all of a users comments that have been entered manually:
  * Ability to add a new post.
  * Ability to comment on others post.

* A post should have the following information:
  * Username of the person that posted
  * the title of the post
  * The body of post
* Provide a way for the user to search for specific post by other users by the persons username

## Data Models

### `Blog`

| Column   | Type                 |
|----------|----------------------|
|`id`      | SERIAL (PRIMARY KEY) |
|`username`| VARCHAR (NOT NULL)   |
|`title`   | VARCHAR(30)          |
|`body`    | VARCHAR(100)         |


```json
{
  "id": 1,
  "username": "Big-Don",
  "title": "Coding Class",
  "body": "I just started coding",
}
```

## Routes

### GET `/`

no arguments

* The main portfolio page that list all my projects i have completed
* Each project will be a link to their github repository
* It'll have a search bar at the top for searching through my project


### GET `/blog`

No arguments

* Displays all the post of the blog
* Inputs for all contact fields except id, which is auto-generated
* Upon submitting, POSTs to `/blog` with data from the form


### POST `/blog/form`

| Argument     | Description                                                                     |
|--------------|---------------------------------------------------------------------------------|
| `id`         | Primary key for the post, if one exists.  |
| `username`       | Name to assign to the contact. |
| `title`      | The title of the post |
| `body`      | The main content of your post. |


* Endpoint for submitting the post form
* Provides ability to make your post title and the body of your message
* Upon success, redirects back to `/` with a success message saying which of the 3 happened.
* Upon error, redirects back to `/contact/:contactid` or `/contact/new` with an error message.


### GET `/search`

| Argument | Description                   |
|----------|-------------------------------|
| `name`   | What name we're searching for |

* This page will look like and behave like the blog page, but only show searched contents
* It will show anyone whose name includes the string in `name`
* The search form at the top will have its value pre-populated with `name`


## Inspiration

I'm using the following apps for design / functionality inspiration:

* [Fubiz](http://www.fubiz.net/) - Exactly what I want to build. I really like their use of images as links to projects. Can use that for my projects links on my portfolio.
* [Webdesigner Depot](https://www.webdesignerdepot.com/) - One thing that we particularly like is the way Webdesigner Depot has incorporated social sharing icons on each individual post.
* [Mashable](http://mashable.com/) - I like the color schemes they used on the website to tie everything together.
## Github and Heroku links
Heroku: https://serene-cliffs-56216.herokuapp.com/
github: https://github.com/dtofuah/Blog
