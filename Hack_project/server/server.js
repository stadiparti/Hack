var http= require('http');
var url=require('url');
var datalist=[
    {
        userid: "vidhi987",
        password: "vidhipassword",
        name: "Allstate 2 Year Tablets Protection Plan with Accidents coverage",
        company: "20%",
        country: "Target",
        college: "AKGEC",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT08IdA7I9lpjQinbuqJH1gVD-XK2EJ5sCVQhXd14RZC-DWBtQigozFwQpwwv-mA9kwARTENpJd9w&usqp=CAc",
        description: "A college student with an ambition to be a part of the world of Software Engineering",
        skills: ["C Programming","C++","Java Core", "HTML", "CSS","Big Data Analytics","JavaScript"]
    },
    {
        userid: "gaurav",
        password: "gauravpassword",
        name: "Logitech Bluetooth Keyboard (K380)",
        company: "$20.99",
        country: "Target",
        college: "xyz",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR4uxUIAqx17WiJ1eLMOiZILDwRAY2xOUu7FfC1F2pEaC0Qhwvv9tuTiYwntsCqt7hP9cLXea-Xzg&usqp=CAc",
        description: "",
        skills: ""
    },
    {
        userid: "devansh",
        password: "devanshpassword",
        name: "Apple Smart Keyboard for iPad (7th generation) and iPad Air (3rd generation)",
        comapny: "$159.99",
        country: "Target",
        college: "xyz",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQsmlXZozxm3_MGurW96qQR6s_3VIjuPUpOYkhjRxLPHi5FouLZ-8b17sVuJwIWQFBJh_3EgwJAFLo&usqp=CAc",
        description: "",
        skills: ""
    },
    {
        userid: "riddhi",
        password: "riddipassword",
        name: "Riddi Sehgal",
        company: "Student",
        country: "India",
        college: "AKGEC",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAADoCAMAAADSd1hKAAAAElBMVEUAFlxHcEwADkUAC0YBDE4CC0lp1J3FAAAABnRSTlPbAODKnUWeQfibAAANP0lEQVR4nNWdi8KbOgiA/RP7/q+8qlXDNRAhXdnOWVut4RNCCFG7/P2YvAa/t3jbea2cvPJkXSuSpdZ3i6mgr3V5t7IQYT5Kkbr93f/UxYnqAX3VHROf4Pf53f6u9z/r+fdSsNnA/Gm+WSv6HGy8Nuyndk0CXXeNgcqffxtdG4W31xATnQ4GUz0XB3Rdl/31dmCHUe2g63L0D5evlU2dEue7lxyoDlIz6BDnDlpyuvBBGg76Og7slVIO2BTZvTcatOV0AOeCFofzGkFXbVSRwOsOWhJBHc5rBP10T4LUNW4m6NG80aQ20BdrUIOkWvRwXuNoagNdBc7a9MAjuKKxBIOW9g8W7Zx8Np9/GgVCQdHAUomOUGEFtCcAo3nJt7CHo1DQAiy6tVWvU7y9LLVVFZhwUUEX9I4gFuaLzSl//xcJWqBF70GD9TW4p95Hi/JO2jMZlEBYVGfGUeyZ9x6wM2NnaL8wAdQpskVlfH7H0lDeyqSAOljvXe3DS2n+p39lius6RbKoBb4Y9tvCbhKoc5rWtWjT7XC4ph9OAfUQXvuqoF2zFuF1LihCMIoUOjUyc5xKdV2fCBblR082JdIlFvRVhybdp8a6BZkxtNnak1jQ6gZt+6ior/L5FXDnRt31kUXt0zR+/FS/Hg2akBlhjrFZa4pFd1Yj8O27FgTekDin5d5+u4/e6jIWNdiO7iKM49l91IZdF92iPWKwnU+2vx2MrEm9KbJeB7ys2sxeckD9/nuUEIC6zgO0sNSqiX20LR0ZQTUAeaNQvIBnPNl1HVMZU9SllOTl7bTAgTNAxYKn9qk3MzoHFW5b5Rqs/8nwsoA+2t+73bnt2kLzNdN1D13alqkWbdS1uy4tC7MnIC/qVgxKlJHtzYLyEQhXr8kpYJpMH0fNFS9tHK1gx7N+zc/b6seq84YXGZUdeETXxaV/bWJ6bKjbegA+yoTMyDYBA3tJHv7hRAMLV5nYFj9mgy5Sl4KrF3yGjpRvHVY9ewWxzpq9UF9CVsN9tBLMhS5MEQGdAoSleUk9pyMIMp2a0aU13vFOHHDT7cmdOHvpdNXO7GVkstrK5Im3tlIt6n4v+wpj5/wqoJbrNkA8jbyapnVNW51pCc51DRPvwsWlj06GnG5klnNwxrtud/FFKlZy2SsZNyHy9aLHXqdb9GTi1MafGsYTs3ytZkSCKDGLZsz2c3l4gaTWK6piQSkC47oBV1jdU9VvWZRo5F9NY2besgdsoN+wKIskJAW92YpJ7BcDRo2juHUNlBfWyp3AnDWOjtVlfX3SZ+EMiw5JcYGad7zrrQlR14qK5mkYlDvMYFr0OdyXLMrMR4OSg+aooLlvWJTuxbguKCjJCCbJcF0TJ1F8zCuFkhHfZAaohsvb3B11RWGP8oWoK+xgAH10HuIt6jfmSfHAot1vTs2M+IsLPpr6o647Y5jkuqSASdRuQdWJqAmxnI0erc8KRnRFDxkQu660XjYEvUwcR3F+gMcTHrQ/7yas/FfmjKMYnkNgp2maVb2F3XRQ4rS8oYSoO5IXct9IT+ppCBIcUoi6RWctEhglzbVoxW4rdjxxHJWXtz2SbNGK/hXW3WXQI5e1RmCVNM+iTOfUx0b9HsJndk2wqLJuqGmqgZaL9QHprMzIkLGrQUeJSsLX4ELwJFDJ8fQ+SmKqbFWme8OePQPU5HOSRWGZ2nrlPVlQ3a8MNz01ZTgFNA4PlmlaOUMw/IylxN6wgZoeUTBqUWsI6fXRFgN3BJzscm0mgLbjqD1SOibevZGIzZc20JJlUc/QZwQtpwNLm8nk78O556KhoJVtKAoUHZd8QywLbo9XSrOoQa7dvcWxgl9Rfy25Fu3VTGSKkHKndIzMPlqZV5qCI6BWJ6hpw4vXpvZg1MfjJN6irElNBG6LFvYlu0eaRY2MvfnomLC1lDyL0gpnRzkKasxrxU9LqkVburuU0mOOtCgnO6jlST8B1zAwnwa5ruGL8RZFnbQafbgHKm4r6tuLMzPqXoCWrprjumDiHey63EBqsKkV1J9zHV/LGF4g1g2u6qjUdS+7DCWWd/NJFoWaCTFqPBi1NxMYpGZE3atczcMJintAr8JXDza/j9ajGRiCNe/1gfoXKrYBPnr20lh0u4S+RZUtrIHi1RtwE54qmRbt6KmoZLyFzUl4K5HhuiobO7+RQNHyTcspA6/nCW9y3b2wGwnKNYwfEcxVuVlQVIBib3imxPuDo+mREocXXcjdhkRh+PYuSnem33V7dDwHOmU+im7oJJt7fdSzbrieoKnBiGb1N8soqHTZg3Bo6li7XvNcVzGqBnrdnmY0aa2lcq4bXwW8K560m8nVHXlJUCkisHIFIxB184ORZZlCSerFZF+WQoNR5PDyskXd4OuMmB22iQralpQZ6bVA7sZKDrSYeyXhJC2n1nVloX2VAf047Ui1un4GM1QFDHXdhRQXeFT6/sF93HDPPTNCnfSLmVHB76hFPQcAoAsHGhyMrJxU67DiWF3LZ3yZURwDLfP6PASVd99/DAZ+EprrvpQLkw1aB1qU+SzXonboUIu+aDEpvo/2J95t209ARdb9F4vwZ+EpoFFFcvk5Aa0aS7OBz4zo7CV6HMWkLLnpJjxZejvWGRY1RF1uF7frKvPwyk28w5P6fgdlA3Ns1G1+iu1qdHYVUNgkg4p9VSwDr9SiObmuRjlSwHbKyv0w1Jw+2sUMHUfrp6wLtoeupqmZEZ7WPAeVZOuhs6IuH3pxOVoDdZYW2tcbJO7YE8ZRlpKuoXDTNO15BSTHu4XUi85vz5+91EIWT1nXHXRmppScEXUpKb3bkCpHQcsDVCpJFq1NAyrmtUkud8aghgYjYNETmF0pYniUTcM1FZgCTq0ZaXMR+807/rl9TZqPftRh5mKSyp1FpsEb05IsqlfqO6uCgYGHkwzXrXcHhSSaaKXq4/NntxvOShjEqkfzb3N1rXiM0XR40uzFoKDNdT0/fwMlw6K0SmJTrsNQXAdrv5MF6qE0Rl10xJF1p2TQjJvwTFMbJLEr3rSPutbDXPemuUkn9FGj6j90BTZ13SyLeo58yOTimKp4rkXjL9Zgr7uxqDRw/6hdUlzXAclnRgmSOXtxyU8l9U9Al1zQlPloOyPtKnD+k27RnKhbm+Pb5AS1ryO7JMGi+PpVo9ITLLq8Qi/WYMCMa2vZoBZ7PgHtLLp8JNmisY/50aJu5+MaDkpX2TNA/dHEBPogSL31mmHRytWysXRATRNAaaaa47qnSgZXHKgw6ERS/SGzj5YD1eZvEJSNaC2lMPU+iqbMlgSLIp2s3cpj0X5JkR4qP+oWaFbYVcECqQRKym093sKgJoyjzAoaSpY4/UWLSphdIevlM6IuVO9KIWC+SPso86Q2h7Sk23GyMyObioxFyZHcCQU8dXMyI05xVEdzPaGKec98Aay9BFvUmNsyFGNP1jDKTIsu2gnoLQSP4QHXndNHadPk81+fplGihTetnNQ9dtyMPjr8S3juuwpd9EkW5ZOfRkeipAD60J3BGvpk18Uq3O8HH8Vlk/l9lIcYqTB82XU5XzXA/2jUHVsiTVxN+14fPVtvVPpFi/plQrkzdRw1J76/adERq5LZS+wCzJyoy2lNp9Q/aFFTu0RS++iSbFEem/n0Jy1KymOo30pF+8xxNKcKqIsE+XsWbWt72LTiLG78CtUWRtyUFYykNkVdftOiQlu9x3f+HKgx1Bb0Bt/JFL0uXMNB2RIuvyYD3nfIH3Emuy676MJQSlxxqBkWrbgJ6spSvY9+pD5arkOWDEoyBtxr+WKfOLwMWJUvcmT00bYB04IYWk17SsoePzMzsq/7lXYj6dLPWRMtyvRNqm5tNt3XAjLyELXmgDawreqd1TLTDT7DpO//4kFH9Cy9Xdw34eEfiAsHZSfVgjKtuQ0PJPCg0sJMNGhQzYjfy3eJDgxvwaBcemBBsEHYHJi9zii7jzJ68c5ttVYXVWoxGrSfBl1Ng+HFHlc7VztwW5MseiXznjjpucHHfAvmKbOiLhCh1pl6b9rWaDSos/lL8wvUcginRRP66AJ81y4BxTFNQl0X/piEytrOyI9vdDMjKM6TUkNd97Bpn1JQ/Ics+vcqvcxIqXfmBqMlFnQB8zRZSDEJWDR2xfA4ZLDrloEV7/Mb2dcwRFv00/MxMAnGcIeSG4zC+yjz6MFu+8PKe9sJBqUXMSyGaxm8mZFXovvo0uS6htgLXfyXXFcPRuK2+mOZ0Xu31nM5LviD5s0GZzBySo0GvWspV+esZxRuPyRLwt6o65USWe68QKFN70B0AzYx6tYEgMLzBWVgrC6Rlfq3cI+2NS2Ypua6dQeNu0vi78oBB6ZqyX3U6rlW0LdJR7LA7HHUblAz6HuAKabnpeDVp1TQ96FtPdQOupm0iAmvqkoaaH0f2ei4DtAtHok/Bif33ZIXjd7aFKvjekD/1uJ/KOP+W5sBy6BE6q6M6QdQ3KAfUq8cyw0pYu2fXtB33uBXZilZoA5zukH/XusAa4bU1YXpBt1hn8vfW8uX4U+g/AOP7XnXbWFVdQAAAABJRU5ErkJggg==",
        description: "",
        skills: ""
    },
    {
        userid: "dainik",
        password: "dainikpassword",
        name: "Targus ProTek Case for iPad Mini 1/2/3/4/5",
        company: "$20.99",
        country: "Walmart",
        college: "IMS",
        image: "data:image/png;base64,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",
        description: "",
        skills: ""
    },
    {
        userid: "viraj",
        password: "virajpassword",
        name: "Virag Mishra",
        company: "Student",
        country: "India",
        college: "IMS",
        image: "images/men-vector.jpg",
        description: "",
        skills: ""
    }
];
var server= http.createServer((req,res)=>{
    var  queryString=url.parse(req.url,true).query;
    var collegefilter=queryString.college;
    var namefilter=queryString.name;
    var response=[];
    for(var i=0;i<datalist.length;i++)
    {
            if(collegefilter)
            {
                if(collegefilter===datalist[i].college)
                response.push(datalist[i]);
            }
            else
            {
                if(namefilter===datalist[i].name)
                response.push(datalist[i]);
            }
        
    }
    if(response.length===0)
    {
        response=datalist;
    }
    var resp=response;
    var response=JSON.stringify(resp);
   // var response=JSON.stringify(datalist);
    res.writeHead(200,{'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    res.write(response);
    res.end();

});
server.listen(8081);