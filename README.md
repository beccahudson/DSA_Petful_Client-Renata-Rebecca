# Petful App 
By Renata Dickinson and Rebecca Hudson.

## The project:

Petful operates on a FIFO (first-in, first-out) basis. Given a queue of dogs and a queue of cats, users adopt the first available pet. As a new adopter, add your name to the waiting list and watch as each available pet gets adopted. When it's your turn to adopt your pet, click the adopt button to dequeue that pet and complete the adoption process!


## Links:
<!-- TODO PUT THE LINKS HERE -->
* Live: [Petful Live App]()
* Petful Server: [Github](https://github.com/thinkful-ei-panda/DSA_Petful_Server-Renata-Rebecca)
* Gist: [Petful App](https://gist.github.com/Seraphyne/283d2e4e3415d23888ed6fdf41b2022f) 

## Technology Used

Front-End: _ReactJS | CSS_

Back-End: _NodeJS | ExpressJS_

## API Documentation

| Method | Path               | Purpose                                                        |
| ------ | ------------------ | -------------------------------------------------------------- |
| GET    | /api/cats          | Get the first cat in the queue                                 |
| DELETE | /api/cats          | Dequeues the first cat in the queue                            |
| GET    | /api/cats/morecats | Reloads the cats in the queue when there are no more available |
| GET    | /api/cats/allcats  | Get all cats next in the queue                                 |
| GET    | /api/dogs          | Get the first dog in the queue                                 |
| DELETE | /api/dogs          | Dequeues the first dog in the queue                            |
| GET    | /api/dogs/moredogs | Reloads the dogs in the queue when there are no more available |
| GET    | /api/dogs/alldogs  | Get all dogs next in the queue                                 |

## Screenshot

* Landing Page ![Landing Page](./image/landing.jpg)
* Pet Adoption Page ![Adoption Page](./image/adopt.jpg)
* Waiting List for Adoption ![Adoption Q](./image/adoptionQ.jpg)
* When ready to adopt ![Your Turn](./image/adoptionQ.jpg)