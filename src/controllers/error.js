exports.get404 = (error, req, res, next) => {
    console.log(error)
    res.status(500).render('Error stated here', error)
}
