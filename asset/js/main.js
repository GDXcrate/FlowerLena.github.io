/*
Judul Project : Main Yuk!
Deskripsi : Main Yuk! adalah sebuah permainan seberapa sayang pacar kita. Main Yuk!
            dibuat dengan menggunakan Jquery.
Pembuat : Muhammad Surya Jayadiprana
Disclaimer : Tolong jangan hapus bagian ini, karena menandakan anda mengsupport
            developer lokal. Terima kasih
*/

// Dialog
$(document).on('click', '#tombolPopup', function (e) {
    e.preventDefault();
    Swal.fire({
        icon: 'info',
        title: 'Halo Kamuuu',
        text: 'Aku Ada Pertanyaan Nih Buat Kamu',
        showClass: {
            popup: 'animate__animated animate__tada'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOut'
        }
    }).then(() => {
        Swal.fire({
            title: 'Jawab Yang Jujur Yah',
            showClass: {
                popup: 'animate__animated animate__jackInTheBox'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOut'
            }
        }).then(() => {
            Swal.fire({
                icon: 'error',
                title: 'Awas Aja Kalo Boong :v',
                text: 'Jangan Boong',
                showClass: {
                    popup: 'animate__animated animate__jackInTheBox'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOut'
                }
            }).then(() => {
                Swal.fire({
                    title: 'Masukkin Nama Kamu Dulu Dong',
                    showClass: {
                        popup: 'animate__animated animate__jackInTheBox'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    },
                    html: '<br><input class="form-control" placeholder="Masukkan nama" id="input-field">',
                    content: {
                        element: "input",
                        attributes: {
                            placeholder: "Masukkan Nama",
                            type: "text",
                            id: "input-field",
                            className: "form-control"
                        },
                    },
                    buttons: {
                        cancel: {
                            visible: true,
                            className: 'btn btn-danger'
                        },
                        confirm: {
                            className: 'btn btn-success'
                        }
                    },
                }).then(
                    function () {
                        const nama = $('#input-field').val();
                        console.log(nama);
                        Swal.fire({
                            title: nama + ' ' + 'Merasa Cantik Banget Gak Sih?',
                            icon: 'question',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Cantik Banget',
                            cancelButtonText: 'Biasa Aja Hehe',
                            showClass: {
                                popup: 'animate__animated animate__jackInTheBox'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOut'
                            }
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                    title: 'Kamu Emang Cantik Bangetttt ' + nama,
                                    showClass: {
                                        popup: 'animate__animated animate__jackInTheBox'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOut'
                                    }
                                }).then(() => {
                                    Swal.queue([{
                                        title: 'Seberapa Cantik' + ' ' + nama + ' ' + 'Sih?',
                                        confirmButtonText: 'Submit',
                                        showCancelButton: true,
                                        text: 'Coba Isi Pengen Tau Seberapa Cantik Kamu',
                                        showClass: {
                                            popup: 'animate__animated animate__jackInTheBox'
                                        },
                                        hideClass: {
                                            popup: 'animate__animated animate__fadeOut'
                                        },
                                        showLoaderOnConfirm: true,
                                        input: 'range',
                                        inputAttributes: {
                                            min: 10,
                                            max: 100,
                                            step: 10,
                                            class: "form-range"
                                        },
                                        inputValue: 100,
                                        preConfirm: function (value) {
                                            Swal.insertQueueStep({
                                                title: 'Haha Kamu Emang Cantik Bangettt' + ' ' + value + '%',
                                                icon: "info",
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                }
                                            })
                                        },
                                        allowOutsideClick: () => !Swal.isLoading()
                                    }]).then(() => {
                                        Swal.fire({
                                            title: 'Sekarang' + ' ' + nama + ' ' + 'Umm Kangen Sama Aku Gak?',
                                            icon: 'question',
                                            type: 'question',
                                            showClass: {
                                                popup: 'animate__animated animate__jackInTheBox'
                                            },
                                            hideClass: {
                                                popup: 'animate__animated animate__fadeOut'
                                            },
                                            showCancelButton: true,
                                            confirmButtonColor: '#3085d6',
                                            cancelButtonColor: '#d33',
                                            confirmButtonText: 'Kangen Dikit',
                                            cancelButtonText: 'Enggak Hehe'
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                Swal.fire({
                                                    title: 'Sama Kangen Banget Sama Kamuuu' + ' ' + nama,
                                                    icon: 'info',
                                                    showClass: {
                                                        popup: 'animate__animated animate__jackInTheBox'
                                                    },
                                                    hideClass: {
                                                        popup: 'animate__animated animate__fadeOut'
                                                    }
                                                }).then(() => {
                                                    Swal.fire({
                                                        title: 'Terakhir nih',
                                                        icon: 'info',
                                                        text: 'Langsung Klik Oke Aja Yah!',
                                                        showClass: {
                                                            popup: 'animate__animated animate__jackInTheBox'
                                                        },
                                                        hideClass: {
                                                            popup: 'animate__animated animate__fadeOut'
                                                        }
                                                    }).then(() => {
                                                        $("#tombolPopup").remove();
                                                        $("#bubble").remove();
                                                        $("#lope").removeClass("tulisan");
                                                        $.playSound('asset/audio/mine.mp3');
                                                        confetti.start();
                                                    })
                                                })
                                            } else {
                                                Swal.fire({
                                                    title: 'Yaudah Deh Kalo Nggak :(',
                                                }).then(() => {
                                                    Swal.fire({
                                                        imageUrl: 'https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif',
                                                        imageHeight: 300,
                                                        showClass: {
                                                            popup: 'animate__animated animate__jackInTheBox'
                                                        },
                                                        hideClass: {
                                                            popup: 'animate__animated animate__fadeOut'
                                                        }
                                                    }).then(() => {
                                                        $("body,html").css("background-color", "#2d3436");
                                                        $("#tombolPopup").remove();
                                                        $("#bubble").remove();
                                                        $("#Miaw").removeClass("tulisan1");
                                                        $(document).ready(function () {
                                                            var canvas = $('#canvas')[0];
                                                            canvas.width = window.innerWidth;
                                                            canvas.height = window.innerHeight;
                                                            if (canvas.getContext) {
                                                                var ctx = canvas.getContext('2d');
                                                                var w = canvas.width;
                                                                var h = canvas.height;
                                                                ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                                                                ctx.lineWidth = 1;
                                                                ctx.lineCap = 'round';
                                                                var init = [];
                                                                var maxParts = 1000;
                                                                for (var a = 0; a < maxParts; a++) {
                                                                    init.push({
                                                                        x: Math.random() * w,
                                                                        y: Math.random() * h,
                                                                        l: Math.random() * 1,
                                                                        xs: -4 + Math.random() * 4 + 2,
                                                                        ys: Math.random() * 10 + 10
                                                                    })
                                                                }
                                                                var particles = [];
                                                                for (var b = 0; b < maxParts; b++) {
                                                                    particles[b] = init[b];
                                                                }

                                                                function draw() {
                                                                    ctx.clearRect(0, 0, w, h);
                                                                    for (var c = 0; c < particles.length; c++) {
                                                                        var p = particles[c];
                                                                        ctx.beginPath();
                                                                        ctx.moveTo(p.x, p.y);
                                                                        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                        ctx.stroke();
                                                                    }
                                                                    move();
                                                                }

                                                                function move() {
                                                                    for (var b = 0; b < particles.length; b++) {
                                                                        var p = particles[b];
                                                                        p.x += p.xs;
                                                                        p.y += p.ys;
                                                                        if (p.x > w || p.y > h) {
                                                                            p.x = Math.random() * w;
                                                                            p.y = -20;
                                                                        }
                                                                    }
                                                                }
                                                                setInterval(draw, 30);
                                                            }
                                                        })
                                                        $.playSound('asset/audio/sakit.mp3');
                                                    })
                                                })
                                            }
                                        })
                                    })
                                })
                            } else {
                                Swal.fire({
                                    title: 'Beneran Nih :( ? Gak Mungkin.... Kamu Yakin Gak Cantik?',
                                    icon: 'question',
                                    text: 'Coba Jawab Yang Bener',
                                    showCancelButton: true,
                                    confirmButtonText: 'Beneran, Biasa Aja Haha',
                                    cancelButtonText: 'Iya Deh Aku Cantik Bangettt',
                                    confirmButtonColor: '#d33',
                                    cancelButtonColor: '#3085d6',
                                    showClass: {
                                        popup: 'animate__animated animate__jackInTheBox'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOut'
                                    }
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        Swal.fire({
                                            title: 'Yaudah Deh :(',
                                        }).then(() => {
                                            Swal.fire({
                                                imageUrl: 'https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif',
                                                imageHeight: 300,
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                }
                                            }).then(() => {
                                                $("body,html").css("background-color", "#2d3436");
                                                $("#tombolPopup").remove();
                                                $("#bubble").remove();
                                                $("#potek").removeClass("tulisan");
                                                $(document).ready(function () {
                                                    var canvas = $('#canvas')[0];
                                                    canvas.width = window.innerWidth;
                                                    canvas.height = window.innerHeight;
                                                    if (canvas.getContext) {
                                                        var ctx = canvas.getContext('2d');
                                                        var w = canvas.width;
                                                        var h = canvas.height;
                                                        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                                                        ctx.lineWidth = 1;
                                                        ctx.lineCap = 'round';
                                                        var init = [];
                                                        var maxParts = 1000;
                                                        for (var a = 0; a < maxParts; a++) {
                                                            init.push({
                                                                x: Math.random() * w,
                                                                y: Math.random() * h,
                                                                l: Math.random() * 1,
                                                                xs: -4 + Math.random() * 4 + 2,
                                                                ys: Math.random() * 10 + 10
                                                            })
                                                        }
                                                        var particles = [];
                                                        for (var b = 0; b < maxParts; b++) {
                                                            particles[b] = init[b];
                                                        }

                                                        function draw() {
                                                            ctx.clearRect(0, 0, w, h);
                                                            for (var c = 0; c < particles.length; c++) {
                                                                var p = particles[c];
                                                                ctx.beginPath();
                                                                ctx.moveTo(p.x, p.y);
                                                                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                ctx.stroke();
                                                            }
                                                            move();
                                                        }

                                                        function move() {
                                                            for (var b = 0; b < particles.length; b++) {
                                                                var p = particles[b];
                                                                p.x += p.xs;
                                                                p.y += p.ys;
                                                                if (p.x > w || p.y > h) {
                                                                    p.x = Math.random() * w;
                                                                    p.y = -20;
                                                                }
                                                            }
                                                        }
                                                        setInterval(draw, 30);
                                                    }
                                                })
                                                $.playSound('asset/audio/sakit.mp3');
                                            })
                                        })
                                    } else {
                                        Swal.fire({
                                            title: 'Kamu Emang Cewek Tercantikkk ' + nama
                                        }).then(() => {
                                            Swal.queue([{
                                                title: 'Seberapa Cantik' + ' ' + nama + ' ' + 'Sih?',
                                                confirmButtonText: 'Submit',
                                                showCancelButton: true,
                                                text: 'Coba Isi Pengen Tau Seberapa Cantik Kamu',
                                                showClass: {
                                                    popup: 'animate__animated animate__jackInTheBox'
                                                },
                                                hideClass: {
                                                    popup: 'animate__animated animate__fadeOut'
                                                },
                                                showLoaderOnConfirm: true,
                                                input: 'range',
                                                inputAttributes: {
                                                    min: 10,
                                                    max: 100,
                                                    step: 10,
                                                    class: "form-range"
                                                },
                                                inputValue: 100,
                                                preConfirm: function (value) {
                                                    Swal.insertQueueStep({
                                                        title: 'Haha Kamu emang Cewek Tercantikkk' + ' ' + value + '%',
                                                        icon: "info"
                                                    })
                                                },
                                                allowOutsideClick: () => !Swal.isLoading()
                                            }]).then(() => {
                                                Swal.fire({
                                                    title: 'Sekarang' + ' ' + nama + ' ' + 'Umm Kangen Sama Aku Gak?',
                                                    icon: 'question',
                                                    type: 'question',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: 'Kangen Dikit',
                                                    cancelButtonText: 'Enggak Hehe',
                                                    showClass: {
                                                        popup: 'animate__animated animate__jackInTheBox'
                                                    },
                                                    hideClass: {
                                                        popup: 'animate__animated animate__fadeOut'
                                                    }
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire({
                                                            title: 'Sama Aku Juga Kangen Banget Sama' + ' ' + nama,
                                                            icon: 'info',
                                                            showClass: {
                                                                popup: 'animate__animated animate__jackInTheBox'
                                                            },
                                                            hideClass: {
                                                                popup: 'animate__animated animate__fadeOut'
                                                            }
                                                        }).then(() => {
                                                            Swal.fire({
                                                                title: 'Terakhir Nih',
                                                                icon: 'info',
                                                                text: 'Langsung Klik Oke Aja Yah!',
                                                                showClass: {
                                                                    popup: 'animate__animated animate__jackInTheBox'
                                                                },
                                                                hideClass: {
                                                                    popup: 'animate__animated animate__fadeOut'
                                                                }
                                                            }).then(() => {
                                                                $("#tombolPopup").remove();
                                                                $("#bubble").remove();
                                                                $("#lope").removeClass("tulisan");
                                                                $.playSound('asset/audio/mine.mp3');
                                                                confetti.start();
                                                            })
                                                        })
                                                    } else {
                                                        Swal.fire({
                                                            title: 'Yaudah Deh :(',
                                                        }).then(() => {
                                                            Swal.fire({
                                                                imageUrl: 'https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif',
                                                                imageHeight: 300,
                                                                showClass: {
                                                                    popup: 'animate__animated animate__jackInTheBox'
                                                                },
                                                                hideClass: {
                                                                    popup: 'animate__animated animate__fadeOut'
                                                                }
                                                            }).then(() => {
                                                                $("body,html").css("background-color", "#2d3436");
                                                                $("#tombolPopup").remove();
                                                                $("#bubble").remove();
                                                                $("#potek").removeClass("tulisan");
                                                                $(document).ready(function () {
                                                                    var canvas = $('#canvas')[0];
                                                                    canvas.width = window.innerWidth;
                                                                    canvas.height = window.innerHeight;
                                                                    if (canvas.getContext) {
                                                                        var ctx = canvas.getContext('2d');
                                                                        var w = canvas.width;
                                                                        var h = canvas.height;
                                                                        ctx.strokeStyle = 'rgba(174,194,224,0.5)';
                                                                        ctx.lineWidth = 1;
                                                                        ctx.lineCap = 'round';
                                                                        var init = [];
                                                                        var maxParts = 1000;
                                                                        for (var a = 0; a < maxParts; a++) {
                                                                            init.push({
                                                                                x: Math.random() * w,
                                                                                y: Math.random() * h,
                                                                                l: Math.random() * 1,
                                                                                xs: -4 + Math.random() * 4 + 2,
                                                                                ys: Math.random() * 10 + 10
                                                                            })
                                                                        }
                                                                        var particles = [];
                                                                        for (var b = 0; b < maxParts; b++) {
                                                                            particles[b] = init[b];
                                                                        }

                                                                        function draw() {
                                                                            ctx.clearRect(0, 0, w, h);
                                                                            for (var c = 0; c < particles.length; c++) {
                                                                                var p = particles[c];
                                                                                ctx.beginPath();
                                                                                ctx.moveTo(p.x, p.y);
                                                                                ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                                                                                ctx.stroke();
                                                                            }
                                                                            move();
                                                                        }

                                                                        function move() {
                                                                            for (var b = 0; b < particles.length; b++) {
                                                                                var p = particles[b];
                                                                                p.x += p.xs;
                                                                                p.y += p.ys;
                                                                                if (p.x > w || p.y > h) {
                                                                                    p.x = Math.random() * w;
                                                                                    p.y = -20;
                                                                                }
                                                                            }
                                                                        }
                                                                        setInterval(draw, 30);
                                                                    }
                                                                })
                                                                $.playSound('asset/audio/sakit.mp3');
                                                            })
                                                        })
                                                    }
                                                })
                                            })
                                        })
                                    }
                                })
                            }
                        })
                    }
                )
            })
        })
    })
});