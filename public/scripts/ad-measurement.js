(() => {
  const key = 'modern-software-ad-consent-v1';
  const tagId = 'AW-18002160794';
  const destination = tagId + '/0BpNCKOPs7sdEJrZjIhD';
  const banner = document.querySelector('[data-ad-consent]');
  if (!banner) return;
  let choice;
  try { choice = localStorage.getItem(key); } catch {}
  let loaded = false;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  const denied = {ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'};
  window.gtag('consent','default',denied);
  window.gtag('set','ads_data_redaction',true);
  function enable() {
    window.gtag('consent','update',{...denied,ad_storage:'granted',ad_user_data:'granted'});
    if (loaded) return;
    loaded = true;
    window.gtag('js',new Date());
    window.gtag('config',tagId,{allow_ad_personalization_signals:false});
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + tagId;
    document.head.appendChild(script);
  }
  function choose(value) {
    choice = value;
    try { localStorage.setItem(key,value); } catch {}
    if (value === 'accepted') enable();
    else window.gtag('consent','update',denied);
    banner.hidden = true;
  }
  banner.querySelector('[data-ad-accept]').addEventListener('click',() => choose('accepted'));
  banner.querySelector('[data-ad-reject]').addEventListener('click',() => choose('rejected'));
  document.querySelector('[data-ad-settings]')?.addEventListener('click',() => { banner.hidden = false; });
  if (choice === 'accepted') enable();
  banner.hidden = choice === 'accepted' || choice === 'rejected';
  // Only the successful server response emits this event. No form values are shared.
  window.addEventListener('modern-software:enquiry-sent',() => {
    if (choice !== 'accepted') return;
    window.gtag('event','conversion',{send_to:destination});
  });
})();
