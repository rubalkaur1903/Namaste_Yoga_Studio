const teamMembers = () => {
    const members = [
        {
            firstName: "Rubal",
            lastName: "Kaur",
            title: "Web Developer",
            team: "Owner",
            imageURL: "https://img.freepik.com/premium-vector/african-american-woman-avatar-with-glasses-portrait-young-girl-vector-illustration-face_217290-363.jpg?w=2000"
        },
        {
            firstName: "Moira",
            lastName: "Rose",
            title: "CEO",
            team: "Owner",
            imageURL: "https://i.icanvas.com/AMY83?d=2&sh=s&p=1&bg=g&t=1623826065"
        },
        {
            firstName: "Rachel",
            lastName: "Greene",
            title: "Yoga Instructor",
            team: "Instructor",
            imageURL: "https://www.artgalleryjose.com/wp-content/uploads/2013/10/Jennifer-Aniston.jpg"
        },
        {
            firstName: "Cherry",
            lastName: "Doe",
            title: "Brand Representative",
            team: "Representation",
            imageURL: "https://i.pinimg.com/736x/ef/b2/92/efb292278f3695e5648e92091648c728.jpg"
        },
        {
            firstName: "Josh",
            lastName: "Smith",
            title: "Software Engineer",
            team: "Technical",
            imageURL: "https://static.vecteezy.com/system/resources/previews/002/406/611/original/business-man-cartoon-character-vector.jpg"
        },
        {
            firstName: "Fred",
            lastName: "Flintstone",
            title: "Technical Support Engineer",
            team: "Technical",
            imageURL: "https://pbs.twimg.com/profile_images/3221613474/671371ab9d06664df30a2ed49210d1f6_400x400.jpeg"
        },
        {
            firstName: "Monica",
            lastName: "Geller",
            title: "Yoga Instructor",
            team: "Instructor",
            imageURL: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77016023-edbb-46fd-9250-510e09204aef/dc4dck5-69681045-e40d-4a2f-b212-ca64d0a1375b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3MDE2MDIzLWVkYmItNDZmZC05MjUwLTUxMGUwOTIwNGFlZlwvZGM0ZGNrNS02OTY4MTA0NS1lNDBkLTRhMmYtYjIxMi1jYTY0ZDBhMTM3NWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AJ4rM7y4h1ZchvEO6NA-ciYUtwa_WPpTGG16Evt7KVY"
        },
        {
            firstName: "Joseph",
            lastName: "Tribbiani",
            title: "Dietician",
            team: "Health Care",
            imageURL: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d69592e4-534e-4ea5-b54d-870f4117f4a9/dd4ubs9-a5672c2a-a8f9-4124-88b8-bec252dda1a2.jpg/v1/fill/w_1280,h_1280,q_75,strp/joey_tribbiani_17_04_19_by_valepereira_dd4ubs9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Q2OTU5MmU0LTUzNGUtNGVhNS1iNTRkLTg3MGY0MTE3ZjRhOVwvZGQ0dWJzOS1hNTY3MmMyYS1hOGY5LTQxMjQtODhiOC1iZWMyNTJkZGExYTIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EijR7a06TGLpc6R2VWwNIGAEcHguFPw7JwQhs_WMIsc"
        },
        {
            firstName: "Johnny",
            lastName: "Bravo",
            title: "Fitness Consultant",
            team: "Health Care",
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwiDjWmsyfhrr2WSyMaJ2fOH9-9o1NH_OOg&usqp=CAU"
        },
        {
            firstName: "Thomas",
            lastName: "Cat",
            title: "Security Guard",
            team: "Security",
            imageURL: "https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_1280.png"
        },
        {
            firstName: "David",
            lastName: "Rose",
            title: "Brand Representative",
            team: "Representaion",
            imageURL: "https://cdn.shopify.com/s/files/1/0910/1550/products/davidsticker2_300x300.png?v=1619558768"
        },
        {
            firstName: "Phoebe",
            lastName: "Buffay",
            title: "Sr. Yoga Instructor",
            team: "Instructor",
            imageURL: "https://external-preview.redd.it/5aHLGqFq01-PViLi57zaZpI3lIwMhN8eMR132KtFnMA.png?format=pjpg&auto=webp&s=3b48f91dc946684888dd466de1635649a55017a3"
        },
        {
            firstName: "Popeye",
            lastName: "Sailerman",
            title: "Dietician",
            team: "Health Care",
            imageURL: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/01/15/09/popeye.jpg?quality=75&width=1200&auto=webp"
        },
        {
            firstName: "Chandler",
            lastName: "Bing",
            title: "Data Analyst",
            team: "Technical",
            imageURL: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/827468f7-0e9b-4dde-91d5-220c5dc561e3/defqjei-3ff17e85-7207-44f5-89f4-8f96534e8d91.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyNzQ2OGY3LTBlOWItNGRkZS05MWQ1LTIyMGM1ZGM1NjFlM1wvZGVmcWplaS0zZmYxN2U4NS03MjA3LTQ0ZjUtODlmNC04Zjk2NTM0ZThkOTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.C6RnDGfTkKSqlAXgiwHdg8O-_Fmrrdc3uyQ5wSu7vnk"
        },
        {
            firstName: "Stevie",
            lastName: "Budd",
            title: "Receptionist",
            team: "Human Resources",
            imageURL: "https://64.media.tumblr.com/c42651d7109c2c0d5d4596dba731e8d0/fbeab235b82dba7f-e7/s540x810/3cd916c1c9cc1a5b777a082776e3cac5d09f2a7c.jpg"
        },
        {
            firstName: "Ross",
            lastName: "Geller",
            title: "Consultant",
            team: "Human Resources",
            imageURL: "https://cdn.dribbble.com/users/5373375/screenshots/12244481/shot-cropped-1592945077185.png"
        },
        {
            firstName: "Gloria",
            lastName: "Delgado",
            title: "Brand Representative",
            team: "Representation",
            imageURL: "https://i.pinimg.com/736x/c5/b4/7d/c5b47d096dd3f29885be5e7604bf98f2--sofia-vergara-san-francisco-bay.jpg"
        }
    ]
    return members
}

module.exports = { teamMembers }