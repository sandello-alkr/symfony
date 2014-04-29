<?php

namespace alkr\ExtendCMSBundle\Controller;

use alkr\CMSBundle\Controller\BlockController as BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;


class BlockController extends BaseController
{
    /**
     * @Template()
     */
    public function leftMenuAction()
    {
        $twig = $this->container->get('twig');
        $globals = $twig->getGlobals();
        $em = $this->getDoctrine()->getManager();
        $repo = $em->getRepository('CMSBundle:Page');
        $pages = array($repo->find($globals['left_menu_parent']),$repo->find($globals['top_menu_parent']));

        return array('pages'=>$pages,'repo'=>$repo);
    }
}
