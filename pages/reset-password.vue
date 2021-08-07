<template>
    <div>
        <b-jumbotron class="mainHeader">
            <b-container>
                <h1>Reset Password</h1>
            </b-container> <!-- ./b-container -->
        </b-jumbotron> <!-- ./b-jumbotron -->
        <b-container>
            <div class="card w-50 m-auto">
                <div class="card-header">
                    <h3>Reset your password</h3>
                </div>
                <div class="card-body">
                    <p>Enter your email to get password reset link</p>
                    <div class="form-group">
                        <label for="Email"></label>
                        <input type="email" class="form-control" name="Email" id="" aria-describedby="Email" placeholder="Email">
                    </div>
                </div>
                <div class="card-footer text-muted">
                     <button type="submit" class="btn btn-secondary">Reset Password <span class="icon-lock-open"></span></button>
                </div>
            </div>
        </b-container> <!-- ./b-container -->
    </div> <!-- ./div -->
</template> <!-- ./template -->