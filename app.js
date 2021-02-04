var fs = require('fs');

fs.readdir('.', function (err, files) {
    if (err) {
        console.log('Error finding files: ' + err)
    } else {
        files.forEach(function (filename, fileindex ) {
            console.log(filename)
            gm(source + filename).size(function (err, values) {
                if (err) {
                    console.log('Error identying file size: '+ err)
                } else {
                    console.log(filename + ' : ' + values)
                    aspect = (value.width / value.height)
                    width.forEach(function (width, widthIndex) {
                        height = Math.round(width / aspect)
                        console.log('resizing' + filename + 'to' + height + 'x' + height)
                        this.resize(width, height).write(destination + 'w' + width + '_' + filename, function (err) {
                            if (err) console.log('Error writing files: ' + err)

                        })
                    }.bind(this))
                }
            })
        })
    }
})