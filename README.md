# 360ImagingTask
blogpost that have only two features Posts &amp; Comments and CRUD for both of them following REST architecture patterns.

Technologies used:
- HTML
- CSS/Bootstrap
- JavaScript(Angular js)
- Node Js (Express js)
- MongoDB(mongoose )
- MVC 

Task Summery : 
- Home Page which can to show all post in the application and update , show post and delete thit post 
![image](https://user-images.githubusercontent.com/43087772/119240204-7d5ca980-bb4e-11eb-8632-a48f49a5ecd3.png)
- add post page which the user can add all the post data " title , description , image Url " when the user confirm the data redirect to the home page 
![image](https://user-images.githubusercontent.com/43087772/119240283-e04e4080-bb4e-11eb-928c-bd523544cd7b.png)
- when the user need to delete the post click on the delete bottom and show the window alert first then delete it 
![image](https://user-images.githubusercontent.com/43087772/119240309-083da400-bb4f-11eb-9930-5c7a88123823.png)
- when the user need to update the post data click on the update button and go to the post form with the post data 
![image](https://user-images.githubusercontent.com/43087772/119240346-37ecac00-bb4f-11eb-81f4-02dac075416a.png)
- when user click on the show post go to page of this post with all comments of this post and user can add comment , show all comments and delete one comment 
![image](https://user-images.githubusercontent.com/43087772/119240486-17712180-bb50-11eb-89f1-29ef46571583.png)


End Point : 
- Get request on your local host "http://localhost:4200/": for get all posts 
- Post request on your local host "http://localhost:4200/add-post": for adding post with the request data  
- Delete request on your local host "http://localhost:4200/delete-post/:id": for delete one post with the post ID 
- Get request on your local host "http://localhost:4200/get-post/:id": for get one post
- Put request on your local host "http://localhost:4200/update-post/:id": for update the post with the data updated 
- Post request on your local host "http://localhost:4200/add-comment": to add comment 
- Delete request on your local host "http://localhost:4200/delete-comment/:id": for delete one comment 
- Get request on your local host "http://localhost:4200/get-comments/:id":  for get all comments

