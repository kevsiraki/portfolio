<?php
class PageVisitController
{
    private $model;

    /**
     * PageVisitController constructor.
     *
     * @param PageVisitModel $model The page visit model.
     */
    public function __construct(PageVisitModel $model)
    {
        $this->model = $model;
    }

    /**
     * Handle recording of page visit.
     *
     * @return void
     */
    public function recordPageVisit()
    {
        $pageUrl = $_SERVER['REQUEST_URI'];
        $ipAddress = $_SERVER['REMOTE_ADDR'];
        $userAgent = $_SERVER['HTTP_USER_AGENT'];
        $referrer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';
        $preferredLanguage = isset($_SERVER['HTTP_ACCEPT_LANGUAGE']) ? $_SERVER['HTTP_ACCEPT_LANGUAGE'] : '';

        try {
            $this->model->saveVisit($pageUrl, $ipAddress, $userAgent, $referrer, $preferredLanguage);
        } catch (Exception $e) {
            // Handle the exception, e.g., log it or display an error message
            error_log($e->getMessage());
        }
    }
}