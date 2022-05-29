console.log(document.domain)
if (document.domain === 'github-com.proxy.xiaoshuogeng.com') {

    window.onpopstate = function (event) {
        console.log(event.state);
        console.log(window.history.state);
    };
    history.pushState = (data, title, targetURL) => {
        console.log(targetURL)
        location.href = targetURL;

    }
    history.replaceState = (data, title, targetURL) => {
        console.log(targetURL)
        location.href = targetURL;
    }
    window.addEventListener('click', (event) => {
        console.log(event.target)
    })
    let contentContainer = document.querySelector('#js-repo-pjax-container')

    if (contentContainer) {
        contentContainer.addEventListener('click', (event) => {
            console.log(event.target);
            //event.preventDefault();
            event.stopPropagation();

            if (event.target.href) {
                console.log(event.target.href)
                location.href = event.target.href;
            }
        });
    }


    let pageContentContainer = document.querySelector('#js-pjax-container')

    if (pageContentContainer) {
        pageContentContainer.addEventListener('click', (event) => {
            console.log(event.target);
            //event.preventDefault();
            event.stopPropagation();

            if (event.target.href) {
                console.log(event.target.href)
                location.href = event.target.href;
            }
        });
    }

    let repoContentPjaxContainer = document.querySelector('#repo-content-pjax-container')

    if (repoContentPjaxContainer) {
        repoContentPjaxContainer.addEventListener('click', (event) => {
            console.log(event.target);
            //event.preventDefault();
            event.stopPropagation();

            if (event.target.href) {
                console.log(event.target.href)
                location.href = event.target.href;
            }
        });
    }

}