<template>
    <div>
        <b-jumbotron class="mainHeader">
            <b-container>
                <h1>Registration</h1>
            </b-container> <!-- ./b-container -->
        </b-jumbotron> <!-- ./b-jumbotron -->
        <b-container>
            <div class="card w-50 m-auto">
                <div class="card-header">
                    <h3>Register</h3>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="Name"></label>
                        <input type="text" name="name" id="" class="form-control" placeholder="Name" aria-describedby="Name">
                    </div>
                    <div class="form-group">
                        <label for="Email"></label>
                        <input type="email" class="form-control" name="Email" id="" aria-describedby="Email" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label for="Phone"></label>
                        <input type="tel" class="form-control" name="Phone" id="" aria-describedby="helpId" placeholder="Phone">
                    </div>
                    <div class="form-group">
                        <label for="Password"></label>
                        <input type="password" class="form-control" name="" id="" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <label for="Confirm_Password"></label>
                        <input type="password" class="form-control" name="Confirm_Password" id="" placeholder="Confirm Password">
                    </div>
                </div>
                <div class="card-footer text-muted">
                     <button type="submit" class="btn btn-secondary">Register <span class="icon-user-following"></span></button>
                </div>
            </div>
        </b-container> <!-- ./b-container -->
    </div> <!-- ./div -->
</template> <!-- ./template -->