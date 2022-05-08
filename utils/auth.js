const withAuth = (req, res, next) => {
    //checks if user is logged into session
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;