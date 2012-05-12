<?php
/**
 * Piwik - Open source web analytics
 * 
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 * @version $Id: RangeCheck.php 5791 2012-02-09 05:58:45Z matt $
 * 
 * @category Piwik
 * @package Piwik
 */

/**
 * Check range
 *
 * @package Piwik
 * @subpackage Piwik_DataTable
 */
class Piwik_DataTable_Filter_RangeCheck extends Piwik_DataTable_Filter
{
	static public $minimumValue = 0.00;
	static public $maximumValue = 100.0;

	public function __construct( $table, $columnToFilter, $minimumValue, $maximum )
	{
		parent::__construct($table);

		$this->columnToFilter = $columnToFilter;
		self::$minimumValue = $minimumValue;
		self::$maximumValue = $maximumValue;
	}

	public function filter($table)
	{
		foreach($table->getRows() as $row)
		{
			$value = $row->getColumn($this->columnToFilter);
			if($value !== false)
			{
				if ($value < self::$minimumValue)
				{
					$row->setColumn($this->columnToFilter, self::$minimumValue);
				}
				elseif ($value > self::$maximumValue)
				{
					$row->setColumn($this->columnToFilter, self::$maximumValue);
				}
			}
		}
	}
}
