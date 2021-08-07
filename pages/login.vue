<template>
    <div>
        <b-jumbotron class="mainHeader">
            <b-container>
                <h1>Login</h1>
            </b-container> <!-- ./b-container -->
        </b-jumbotron> <!-- ./b-jumbotron -->
        <b-container>
            <div class="card w-50 m-auto">
                <div class="card-header">
                    <h3>Login</h3>
                </div>
                <div class="card-body">
                    <p>Enter credentials below to access site</p>
                    <div class="form-group">
                        <label for="Email"></label>
                        <input type="email" class="form-control" name="Email" id="" aria-describedby="Email" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label for="Password"></label>
                        <input type="password" class="form-control" name="" id="" placeholder="Password">
                    </div>
                </div>
                <div class="card-footer text-muted">
                     <button type="submit" class="btn btn-secondary">Login <span class="icon-login"></span></button>
                </div>
            </div>
        </b-container> <!-- ./b-container -->
    </div> <!-- ./div -->
</template> <!-- ./template -->