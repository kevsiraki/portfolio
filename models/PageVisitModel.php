<?php
class PageVisitModel
{
    private $link;

    /**
     * PageVisitModel constructor.
     *
     * @param mixed $Config The database connection object.
     */
    public function __construct(Config $config)
    {
        $this->link = $config->getDatabaseConnection();
    }

    /**
     * Save the page visit to the database.
     *
     * @param string $pageUrl The URL of the visited page.
     * @param string $ipAddress The IP address of the visitor.
     * @param string $userAgent The user agent string of the visitor.
     * @param string $referrer The referrer URL of the visitor.
     * @param string $preferredLanguage The preferred language of the visitor.
     * @return int The ID of the saved visit.
     * @throws Exception If there is an error while saving the visit.
     */
    public function saveVisit($pageUrl, $ipAddress, $userAgent, $referrer, $preferredLanguage)
    {
        $sql = "INSERT INTO page_visits (page_url, ip_address, user_agent, referrer, preferred_language) VALUES (?, ?, ?, ?, ?)";
        $stmt = $this->link->prepare($sql);
        $stmt->bind_param("sssss", $pageUrl, $ipAddress, $userAgent, $referrer, $preferredLanguage);

        if ($stmt->execute()) {
            return $stmt->insert_id;
        } else {
            throw new Exception("Failed to save page visit");
        }
    }
}