<?php

namespace alkr\ExtendCMSBundle\Controller;

use alkr\CMSBundle\Controller\DefaultController as BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;


class DefaultController extends BaseController
{
    /**
     * @Route("/",name="index")
     * @Template()
     */
    public function indexAction()
    {
        $response = parent::indexAction();
        $response['template'] = 'two_sidebars';
        return $response;
    }
}
