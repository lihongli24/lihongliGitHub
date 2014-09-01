package com.li.controller;

import java.io.OutputStream;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.view.document.AbstractExcelView;

@Component
public class ViewExcel extends AbstractExcelView {

	@Override
	protected void buildExcelDocument(Map<String, Object> arg0,
			HSSFWorkbook workbook, HttpServletRequest arg2, HttpServletResponse arg3)
			throws Exception {
		HSSFSheet sheet = workbook.createSheet("list");
		HSSFCell cell = getCell(sheet, 0, 0);
		setText(cell, "Spring Excel test");
		HSSFCellStyle dateStyle = workbook.createCellStyle();
		// dateStyle.setDataFormat(HSSFDataFormat.getBuiltinFormat("mm/dd/yyyy"));
		cell = getCell(sheet, 1, 0);
		cell.setCellValue("日期：2008-10-23");
		// cell.setCellStyle(dateStyle);
		getCell(sheet, 2, 0).setCellValue("测试1");
		getCell(sheet, 2, 1).setCellValue("测试2");
		HSSFRow sheetRow = sheet.createRow(3);
		for (short i = 0; i < 10; i++) {
			sheetRow.createCell(i).setCellValue(i * 10);
		}
	}

}
